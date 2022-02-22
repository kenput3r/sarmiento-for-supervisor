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

    console.log(response.data)

    if (response.data.results.length > 0) {
      console.log(`Contact Exists: ${response.data.results[0].id}`)
      return { exists: true, data: response.data }
    }
    console.log('Contact Does Not Exist')
    return { exists: false }
  } catch (e) {
    console.error(e.message)
    throw (new Error({ error: e.message }))
  }
}

async function createContact(contact) {
  const url = `https://api.constantcontact.com/v2/contacts?action_by=ACTION_BY_OWNER&api_key=${process.env.API_KEY}`
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

    return response
  } catch (e) {
    console.error(e.message)
    throw (new Error(e.message))
  }
}

async function updateContact(previousInfo, newInfo) {
  const prevInfo = previousInfo.results[0]
  const url = `https://api.constantcontact.com/v2/contacts/${prevInfo.id}?action_by=ACTION_BY_OWNER&api_key=${process.env.API_KEY}`
  const data = {
    lists: [
      {
        id: process.env.LIST_ID,
      },
    ],
    cell_phone: newInfo.phone ? newInfo.phone : prevInfo.cell_phone,
    confirmed: false,
    email_addresses: [
      {
        email_address: newInfo.email,
      },
    ],
    first_name: newInfo.fName ? newInfo.fName : prevInfo.first_name,
    last_name: newInfo.lName ? newInfo.lName : prevInfo.last_name,
  }

  console.log('prev', prevInfo)
  console.log('new', newInfo)
  console.log('data', data)

  return true

  // try {
  //   const response = await axios(url, {
  //     method: 'Put',
  //     headers: {
  //       Authorization: `Bearer ${process.env.TOKEN}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: data,
  //   })

  //   return response
  // } catch (e) {
  //   console.error(e.message)
  //   throw (new Error(e.message))
  // }
}

export default async function handler(req, res) {
  const contact = { email: 'hey@ken.dev' }
  const previousContact = await checkForContact(contact.email)
  if (!previousContact.exists) {
    const newContact = await createContact(contact)
    res.send(newContact)
  } else {
    const updatedContact = await updateContact(previousContact.data, contact)
    res.send(updatedContact)
  }
  console.log(previousContact)
  res.send({ message: 'nothing updated' })
}
