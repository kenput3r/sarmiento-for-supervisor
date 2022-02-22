import 'dotenv/config'

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('we have a post');
    console.log(process.env.TOKEN)
    console.log(process.env.LIST_ID)
    res.send({ message: 'hello from the api' })
  } else {
    console.log('looks like we did not post')
    res.send({ message: 'sorry we only accept posts here' })
  }
}
