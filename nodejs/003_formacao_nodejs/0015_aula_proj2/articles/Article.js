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
// 1 artigo pertence a 1 categoria (belongsTo=pertence a)
Article.belongsTo(Category)


module.exports = Article