https://www.mongodb.com/try/download/community

# esquema
use hcode

# Collection - inserir um objeto em uma colecao(tabela)
db.clientes.insertOne({nome:"william", idade:18})

# buscar
db.clientes.find()

use test
db.testandoArquivos.insertOne({_id:1, title:'testando documento', date: new Date('2020-01-01')})
db.testandoArquivos.find()
