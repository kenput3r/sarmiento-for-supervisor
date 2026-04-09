import 'dotenv/config'

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.send({ message: 'hello from the api' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).send({ message: 'sorry we only accept posts here' })
  }
}
