//consulta medica = appointement

const mongose = require('mongoose')

const appointment = new mongose.Schema({
    name:String,
    email:String,
    description:String,
    cpf:String,
    date:Date,
    time:String
})

module.exports = appointment