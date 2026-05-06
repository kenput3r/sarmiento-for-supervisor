export default async function handler(req, res) {
  // 1. Get the code from the query string
  const { code } = req.query

  if (!code) {
    return res.status(400).json({ error: 'Missing code' })
  }

  try {
    // 2. Prepare the credentials
    const authHeader = Buffer.from(
      `${process.env.CONSTANT_CONTACT_CLIENT_ID}:${process.env.CONSTANT_CONTACT_CLIENT_SECRET}`,
    ).toString('base64')

    // 3. Exchange the code for a token
    const response = await fetch(
      'https://authz.constantcontact.com/oauth2/default/v1/token',
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${authHeader}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          code,
          grant_type: 'authorization_code',
          redirect_uri: process.env.CONSTANT_CONTACT_REDIRECT_URI,
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json(data)
    }

    // 4. Send the tokens back to the client or save to DB
    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
