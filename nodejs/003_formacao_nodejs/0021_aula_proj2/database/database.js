const Sequelize = require("sequelize")

const connection = new Sequelize("guiapress",'root','123456',{
    host:'localhost',
    dialect:'mysql',
    timezone:'-03:00'
})

// const connection = new Sequelize({
//     dialect:'sqlite',
//     storage:'database/database.sqlite'
// })



module.exports = connection;