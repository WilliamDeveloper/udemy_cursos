https://www.mongodb.com/try/download/community

# esquema
use hcode

# Collection - inserir um objeto em uma colecao(tabela)
db.clientes.insertOne({nome:"william", idade:18})

# buscar
db.clientes.find()

# inserir dados no schema "test"
use test
db.testandoArquivos.insertOne({_id:1, title:'testando documento', date: new Date('2020-01-01')})
db.testandoArquivos.find()


# vendo todas collections de um schema
show collections

------------------------------------------------------------------------------

# inserir muitos dados no schema "test"
use test
db.muitos.insertMany([
 {_id:1, title:'testando documento', date: new Date('2020-01-01')},
 {_id:2, title:'testando documento', date: new Date('2020-01-01')},
 {_id:3, title:'testando documento', date: new Date('2020-01-01')}
])
db.muitos.find()

------------------------------------------------------------------------------
# find personalizada
db.muitos.find({_id:3})
db.muitos.find({_id: {$lt: 3}})
db.muitos.find({_id: {$gt: 2}})

db.muitos.find({
    $and:[
        {_id: {$gt: 1} },
        {_id: {$lt: 3} }
    ] 
})

db.muitos.find({
    $or: [
        {_id: {$lt: 2}},
        {_id: {$gt: 2}}
    ]
})

db.muitos.find({
    $or: [
        {_id: {$eq: 2}},
        {_id: {$eq: 3}}
    ]
})

# update one
db.muitos.updateOne(
    {_id:2}, 
    {
        $set: {
            name:"maven", 
            idade:80
        } 
    }
)

------------------------------------------------------------------------------
# update many
db.muitos.updateMany(
    {
        _id: { $lt: 5 } 
    }, 
    {
        $set: {
            name:"maven", 
            idade:80
        },
        $currentDate: { lastModified: true }
    }
)

------------------------------------------------------------------------------
# replace one
db.muitos.replaceOne(
    {
        _id: { $eq: 2 } 
    }, 
    {
        nome:"william"        
    }
)
------------------------------------------------------------------------------
# delete
db.muitos.deleteMany({_id:3})
db.muitos.deleteMany({})