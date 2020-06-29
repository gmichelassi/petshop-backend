const md5 = require('md5')
const Usuario = require('../models/Usuario')

module.exports = {
    async store(req, res){
        const { usuario, senha } = req.body

        let user = await Usuario.findOne({ usuario })

        if(user) {
            return res.json({ mensagem: "Usuário já existe"})
        }

        senha_escondida = md5(`${senha}${usuario}bolinho10`)
        user = await Usuario.create({ usuario: usuario, senha: senha_escondida })

        return res.json(user)
    },

    async index(req, res){
        const { usuario, senha } = req.body
        
        let user = await Usuario.findOne({ usuario })
        if (!user) {
            return res.json({ sucesso: false })
        }

        senha_escondida = md5(`${senha}${usuario}bolinho10`)
        if (user.senha == senha_escondida){
            return res.json({
                sucesso: true,
                user_id: user._id
            })
        }

        return res.json({ sucesso: false })

    },

    async verificar(req, res) {
        const { user_id } = req.query

        try {
            const user = await Usuario.findById(user_id)
            if(user) {
                return res.json({ sucesso: true })
            }
            return res.json({ sucesso: false })
        } 
        catch(e) {
            return res.json({ sucesso: false })
        }
    }
}