export default function handler(req, res) {
  const authUrl = new URL(
    'https://authz.constantcontact.com/oauth2/default/v1/authorize',
  )

  authUrl.searchParams.append(
    'client_id',
    process.env.CONSTANT_CONTACT_CLIENT_ID,
  )
  authUrl.searchParams.append(
    'redirect_uri',
    process.env.CONSTANT_CONTACT_REDIRECT_URI,
  )
  authUrl.searchParams.append('response_type', 'code')
  authUrl.searchParams.append(
    'scope',
    'contact_data campaign_data offline_access',
  )
  authUrl.searchParams.append('state', 'random_state_string')

  // In the Pages router, we use res.redirect()
  return res.redirect(authUrl.toString())
}

// export default function handler(req, res) {
//   return res
//     .status(200)
//     .json({ message: 'Authorization endpoint has been disabled' })
// }
