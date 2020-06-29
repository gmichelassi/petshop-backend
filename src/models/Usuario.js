const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    usuario: String,
    senha: String,
})

module.exports = mongoose.model('Usuario', UserSchema)
