const fastify = require('fastify')
const listen = require('@filippovigani/listenjs-server')

const app = fastify({/* Fastify parameters */})

listen.setup({server: app.server})