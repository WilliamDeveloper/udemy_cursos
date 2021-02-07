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
connection.sync()
connection.sync({force:false})
    .then(()=>{
    console.log('tabela criada');
  return
})

// (async () => {
//     await Pergunta.sync({force:false})
//     console.log('tabela criada');
// })();

module.exports = {Pergunta}