const Agendamento = require('../models/Agendamento')

module.exports = {
    async store(req, res){
        const { dia, mes, ano, hora, minuto, nomeCliente, nomeCachorro, obs, telefone, cor, banho, hotel, taxi, creche, tosa, higiene, fixo } = req.body

        const agendamento = await Agendamento.create ({ dia, mes, ano, hora, minuto, nomeCliente, nomeCachorro, obs, telefone, cor, banho, hotel, taxi, creche, tosa, higiene, fixo })
        return res.json (agendamento)
    },
  
    async edit(req, res){    
        const { agendamento_id } = req.query
        const { dia, mes, ano, hora, minuto, nomeCliente, nomeCachorro, obs, telefone, cor, banho, hotel, taxi, creche, tosa, higiene, fixo } = req.body
    
        await Agendamento.updateOne ({ _id: agendamento_id}, { dia, mes, ano, hora, minuto, nomeCliente, nomeCachorro, obs, telefone, cor, banho, hotel, taxi, creche, tosa, higiene, fixo })
        let agendamento = await Agendamento.findOne ({ _id: agendamento_id })
        
        return res.json (agendamento)
    },

    async list(req, res){
        let agendamentos
        const { dia, mes, ano, fixo } = req.body

        if(fixo) {
            agendamentos = await Agendamento.find({ fixo: true })
            return res.json(agendamentos)
        }

        if(!dia && !mes && ano) {
            agendamentos = await Agendamento.find({ ano, fixo: false })
        }
        if(!dia && mes && ano) {
            agendamentos = await Agendamento.find({ mes, ano, fixo: false })
        }
        if(dia && mes && ano) {
            agendamentos = await Agendamento.find({ dia, mes, ano, fixo: false })
        }

        if(!agendamentos) {
            agendamentos = []
        }
        return res.json(agendamentos)
    },

    async delete(req, res){
        const agendamento_id = req.body._id
        await Agendamento.deleteOne({ _id: `${agendamento_id}` })
        return res.json ({ mensagem: "O agendamento foi cancelado"})
    },
}
