const mongoose = require('mongoose')

const AgendamentoSchema = new mongoose.Schema({
    dia: Number,
    mes: Number,
    ano: Number,
    hora: Number,
    minuto: Number,
    nomeCliente: String,
    nomeCachorro: String,
    obs: String,
    telefone: String,
    cor: String,
    banho: Boolean,
    hotel: Boolean,
    taxi: Boolean,
    creche: Boolean,
    tosa: Boolean,
    higiene: Boolean,
    fixo: Boolean,
})

module.exports = mongoose.model('Agendamento', AgendamentoSchema)
