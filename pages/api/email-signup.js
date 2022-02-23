import axios from 'axios'
import 'dotenv/config'

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`,
  'Content-Type': 'application/json',
}

async function checkForContact(email) {
  const url = `https://api.constantcontact.com/v2/contacts?api_key=${process.env.API_KEY}&email=${email}`
  try {
    const response = await axios(url, {
      method: 'GET',
      headers,
    })

    if (response.data.results.length > 0) {
      return { exists: true, data: response.data }
    }
    return { exists: false }
  } catch (e) {
    throw (new Error({ error: e.message }))
  }
}

async function createContact(contact) {
  const url = `https://api.constantcontact.com/v2/contacts?action_by=ACTION_BY_VISITOR&api_key=${process.env.API_KEY}`
  const data = {
    lists: [
      {
        id: process.env.LIST_ID,
      },
    ],
    cell_phone: contact.phone ? contact.phone : '',
    confirmed: false,
    email_addresses: [
      {
        email_address: contact.email,
      },
    ],
    first_name: contact.fName ? contact.fName : '',
    last_name: contact.lName ? contact.lName : '',
  }

  try {
    const response = await axios({
      url,
      method: 'POST',
      headers,
      data,
    })

    return response.data
  } catch (e) {
    throw (new Error(e.message))
  }
}

async function updateContact(previousInfo, newInfo) {
  const prevInfo = previousInfo.results[0]
  const url = `https://api.constantcontact.com/v2/contacts/${prevInfo.id}?action_by=ACTION_BY_VISITOR&api_key=${process.env.API_KEY}`
  prevInfo.lists.push({ id: process.env.LIST_ID })
  if (newInfo.fName.length > 0) {
    prevInfo.first_name = newInfo.fName
  }
  if (newInfo.lName.length > 0) {
    prevInfo.last_name = newInfo.lName
  }
  if (newInfo.phone && newInfo.phone.length > 0) {
    prevInfo.cell_phone = newInfo.phone
  }

  console.log(prevInfo)

  try {
    const response = await axios(url, {
      method: 'PUT',
      headers,
      data: prevInfo,
    })
    return response.data
  } catch (e) {
    throw (new Error(e.message))
  }
}

export default async function handler(req, res) {
  const contact = req.body.data
  const previousContact = await checkForContact(contact.email)
  if (!previousContact.exists) {
    const newContact = await createContact(contact)
    res.status(200).json({ data: newContact })
  } else {
    const updatedContact = await updateContact(previousContact.data, contact)
    res.status(200).json({ data: updatedContact })
  }
}
