const express = require('express')
const UsuarioController = require('./controllers/UsuarioController')
const AgendamentoController = require('./controllers/AgendamentoController')

const roteador = express.Router()

//roteador.post('/cadastrar', UsuarioController.store)
roteador.post('/login', UsuarioController.index)
roteador.get('/verificar', UsuarioController.verificar)

roteador.post('/agendar', AgendamentoController.store)
roteador.post('/reagendar', AgendamentoController.edit)
roteador.post('/listar', AgendamentoController.list)
roteador.post('/cancelar', AgendamentoController.delete)

module.exports = roteador