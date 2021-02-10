const Sequelize = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users',{
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
})

// forcar para a entidade atualizar no banco de dados
// User.sync({force:true})

module.exports = User