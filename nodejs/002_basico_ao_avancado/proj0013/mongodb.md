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


# inserir muitos dados no schema "test"
use test
db.muitos.insertMany([
 {_id:1, title:'testando documento', date: new Date('2020-01-01')},
 {_id:2, title:'testando documento', date: new Date('2020-01-01')},
 {_id:3, title:'testando documento', date: new Date('2020-01-01')}
])
db.muitos.find()
