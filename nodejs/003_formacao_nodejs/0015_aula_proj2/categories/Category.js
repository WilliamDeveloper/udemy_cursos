const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull: false
    }
})

// forcar para a entidade atualizar no banco de dados
// Category.sync({force:true})

module.exports = Category