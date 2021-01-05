import * as express from 'express'
import { Message } from '@portfolio.workspace/api-interfaces'

const app = express()

const greeting: Message = { message: 'Welcome to api!' }

app.get('/api', (req, res) => {
  res.send(greeting)
})
const PORT_NUMBER = 3333
const port = process.env.PORT_NUMBER || PORT_NUMBER
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api')
})
server.on('error', console.error)
