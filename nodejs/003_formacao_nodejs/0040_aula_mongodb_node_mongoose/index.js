const mongoose = require("mongoose")
const articleModel = require("./article")

mongoose.connect('mongodb://localhost:27017/aprendendoMongo',{useNewUrlParser:true, useUnifiedTopology:true})

const Article = mongoose.model("Article", articleModel)

const artigo = new Article({
    author:'william',
    body: 'conteudo',
    special:true,
    title:'monti python',
    resume:{
        content:"blablau",
        author: 'william2'
    }
})
artigo.save()

Article.find({}).then(articles =>{
    console.log('articles ', articles)
}).catch(error =>{
    console.log(error)
})



Article.find({  _id: '6033cf2e9264bb22dc77c361' }).then(article =>{
    console.log('article ', article)
}).catch(error =>{
    console.log(error)
})


Article.find({
    _id: '6033cf2e9264bb22dc77c361',
    body:'conteudo'
}).then(article =>{
    console.log('article ', article)
}).catch(error =>{
    console.log(error)
})

Article.findOne({
    _id: '6033cf2e9264bb22dc77c361',
    body:'conteudo'
}).then(article =>{
    console.log('article ', article)
}).catch(error =>{
    console.log(error)
})


//senao axar find retorna []
Article.find({
    _id: '6033cf2e9264bb22dc77c361',
    body:'conteudo',
    pimba:2
}).then(article =>{
    console.log('article ', article)
}).catch(error =>{
    console.log(error)
})

//senao axar findOne retorna null
Article.findOne({
    _id: '6033cf2e9264bb22dc77c361',
    body:'conteudo',
    pimba:2
}).then(article =>{
    console.log('article ', article)
}).catch(error =>{
    console.log(error)
})

Article.findByIdAndDelete('6033d235b8dcec543052f12c').then((data)=>{
    console.log('dados removido',data)
}).catch(error=>{
    console.log(error)
})