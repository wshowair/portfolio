import * as express from 'express'
import { Message } from '@portfolio/api-interfaces'

const app = express()

const greeting: Message = { message: 'Welcome to api!' }

app.get('/api', (req, res) => {
  res.send(greeting)
})
const PORT_NUMBER = 3333
const port = process.env.port || PORT_NUMBER
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api')
})
server.on('error', console.error)
