const express = require('express')
const mongoose = require('mongoose')
const roteador = require('./routes')
const cors = require('cors')

const servidor = express()

//mongoose.connect('mongodb+srv://PETshop:saladadefruta@petshop-7bazx.mongodb.net/test?retryWrites=true&w=majority', {
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//})

// Esse é o link final
mongoose.connect('mongodb+srv://main_vanilla:CG6e9lZPTwEY5V93@vanilla-4hzhn.gcp.mongodb.net/Vanilla?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

servidor.use(cors())
servidor.use(express.json())
servidor.use(roteador)
servidor.listen(process.env.PORT || 1234)