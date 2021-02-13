let database = require('./database')

let dados = {
    cd_key : 'blau',
    cd_value : 'pimba'
}


let query = database.insert(dados).into("t411pasi")

    query.then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })

console.log(query.toQuery())
