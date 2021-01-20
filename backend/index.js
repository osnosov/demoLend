require('dotenv').config()

const fastify = require('fastify')
const cors = require('fastify-cors')

const { contactMessageTelegramMessageAdmin } = require('./telegram')

const server = fastify({ logger: true })

server.register(cors, {
  origin: '*'
})

server.get('/', async (request, reply) => {
  reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send({ hello: 'world' })
})

server.post('/contacts', async (request, reply) => {
  try {
    const { lang, phone, name, email, message } = request.body
    await contactMessageTelegramMessageAdmin({
      lang,
      phone,
      name,
      email,
      message
    })
    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({ message: 'Successfully sent a message' })
  } catch (error) {
    // console.log('error send message telegram', error)
    const err = new Error()
    err.statusCode = 500
    err.message = 'I can not send a message'
    throw err
  }
})

server.listen(process.env.PORT_API || 8000, process.env.HOST_API || '0.0.0.0', (err, address) => {
  if (err) throw err
  server.log.info(`server listening on ${address}`)
})
