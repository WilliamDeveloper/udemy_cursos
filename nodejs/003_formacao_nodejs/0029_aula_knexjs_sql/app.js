let database = require('./database')



let dados = {
    cd_key : 'blau',
    cd_value : 'pimba'
}

let select = database.select('*').table('t411pasi')
console.log(select.toQuery())
select.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})


let query = database.insert(dados).into("t411pasi")
console.log(query.toQuery())

query.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})


