const Sequelize = require('sequelize')
const connection = require('./database')

const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull : false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull : false
    }
})

// force false faz com que a tabela so seja criada senao existir
Pergunta.sync({force:false})
    .then(()=>{
        console.log('tabela criada')
    })