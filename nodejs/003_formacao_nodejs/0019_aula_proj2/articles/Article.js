const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull: false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

//relacionamento entre entidades

//1 categoria tem muitos artigos(hasMany= tem muitos)
Category.hasMany(Article)

// 1 artigo pertence a 1 categoria (belongsTo=pertence a)
Article.belongsTo(Category)


// forcar para a entidade atualizar no banco de dados
// Article.sync({force:true})


module.exports = Article