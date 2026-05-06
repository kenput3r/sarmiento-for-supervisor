import axios from 'axios'
import 'dotenv/config'

const DEBUG = true

function buildRouteError(error, fallbackMessage) {
  const status = error.response?.status || 500
  const details = error.response?.data || null
  const message =
    error.response?.data?.[0]?.error_message ||
    error.response?.data?.error_message ||
    error.message ||
    fallbackMessage

  return {
    status,
    message,
    details,
  }
}

async function getAccessToken() {
  const response = await fetch(
    'https://authz.constantcontact.com/oauth2/default/v1/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.CONSTANT_CONTACT_CLIENT_ID}:${process.env.CONSTANT_CONTACT_CLIENT_SECRET}`,
        ).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.CONSTANT_CONTACT_REFRESH_TOKEN,
      }),
    },
  )

  const data = await response.json()
  if (DEBUG) {
    console.log('Access Token Response:', JSON.stringify(data, null, 2))
  }
  return data.access_token
}

async function checkForContact(email) {
  const accessToken = await getAccessToken()
  const url = `https://api.cc.email/v3/contacts?email=${encodeURIComponent(email)}`
  try {
    const response = await axios(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })

    if (response.data.contacts.length > 0) {
      return { exists: true, data: response.data }
    }
    return { exists: false }
  } catch (e) {
    if (DEBUG) {
      console.error(
        'Error checking for contact:',
        JSON.stringify(e.response?.data || e.message, null, 2),
      )
    }
    const routeError = buildRouteError(e, 'Error checking for contact')
    throw routeError
  }
}

async function createContact(contact) {
  // 1. Get your fresh access token using the logic we discussed earlier
  const accessToken = await getAccessToken()

  const url = 'https://api.cc.email/v3/contacts'

  // 2. V3 uses a different data structure
  const data = {
    email_address: {
      address: contact.email,
      permission_to_send: 'implicit', // Required: 'implicit', 'explicit', or 'unconfirmed'
    },
    first_name: contact.fName || '',
    last_name: contact.lName || '',
    // V3 uses a flat array of list UUIDs
    list_memberships: [process.env.LIST_ID],
    // Phone must be a string; note that 'cell_phone' is now just 'phone_number'
    phone_numbers: contact.phone
      ? [
          {
            phone_number: contact.phone,
            kind: 'mobile',
          },
        ]
      : [],
  }

  try {
    const response = await axios({
      url,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data,
    })

    return response.data
  } catch (e) {
    // V3 provides much better error messages in e.response.data
    const routeError = buildRouteError(e, 'Error creating contact')
    if (DEBUG) {
      console.error(
        'Error creating contact:',
        JSON.stringify(e.response?.data || e.message, null, 2),
      )
    }
    throw routeError
  }
}

async function updateContact(previousInfo, newInfo) {
  const accessToken = await getAccessToken() // Your logic from before

  // 1. In V3, the contact object is usually at previousInfo directly
  // or returned from a GET call.
  const contact = previousInfo
  const contactId = contact.contact_id // UUID format

  // 2. Prepare the update payload
  // V3 PUT requires the full object, so we spread the existing data
  // and overwrite only what changed.
  const updatedData = {
    ...contact,
    first_name: newInfo.fName?.length > 0 ? newInfo.fName : contact.first_name,
    last_name: newInfo.lName?.length > 0 ? newInfo.lName : contact.last_name,

    // Add the new list ID to the array if it's not already there
    list_memberships: Array.from(
      // new Set([...(contact?.list_memberships || []), process.env.LIST_ID]),
      new Set([...(contact.list_memberships || []), process.env.LIST_ID]),
    ),

    // Handle phone numbers (V3 uses an array of objects)
    phone_numbers: newInfo.phone
      ? [
          {
            phone_number: newInfo.phone,
            kind: 'mobile',
          },
        ]
      : contact.phone_numbers,
  }

  // 3. Remove read-only fields that V3 will reject if sent back
  delete updatedData.updated_at
  delete updatedData.created_at

  try {
    const response = await axios({
      url: `https://api.cc.email/v3/contacts/${contactId}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: updatedData,
    })

    return response.data
  } catch (e) {
    const routeError = buildRouteError(e, 'Error updating contact')
    if (DEBUG) {
      console.error(
        'Error updating contact:',
        JSON.stringify(e.response?.data || e.message, null, 2),
      )
    }
    throw routeError
  }
}

/*
Contact object structure for reference:
- email
- fName
- lName
*/

/*
previousContact.data structure (from GET):
{
  "contacts": [
    {
      "contact_id": "6ea4f960-8e75-11ec-aa7d-fa163edfff7e",
      "email_address": {
        "address": "joe@example.com",
        "permission_to_send": "implicit",
        "created_at": "2022-02-15T15:39:16Z",
        "updated_at": "2022-02-15T15:39:16Z",
        "opt_in_source": "Account",
        "opt_in_date": "2022-02-15T15:39:16Z",
        "confirm_status": "off"
      },
      "first_name": "Joe",
      "last_name": "Smith",
      "update_source": "Account",
      "create_source": "Account",
      "created_at": "2022-02-15T15:39:16Z",
      "updated_at": "2022-02-15T15:39:16Z"
    }
  ]
}
*/

export default async function handler(req, res) {
  try {
    const contact = req.body.data
    const previousContact = await checkForContact(contact.email)

    if (!previousContact.exists) {
      const newContact = await createContact(contact)
      res.status(200).json({ data: newContact })
      return
    }

    const previousInfo = previousContact.data.contacts[0] // Adjusted for V3 response structure
    const updatedContact = await updateContact(previousInfo, contact)
    res.status(200).json({ data: updatedContact })
  } catch (error) {
    const status = error.status || 500
    const responseBody = {
      error: error.message || 'Internal Server Error',
      details: error.details || null,
    }

    if (DEBUG) {
      responseBody.stack = error.stack
    }

    res.status(status).json(responseBody)
  }
}
