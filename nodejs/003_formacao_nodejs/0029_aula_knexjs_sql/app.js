let database = require('./database')



let dados = {
    CD_KEY : 'blau',
    CD_VALUE : 'pimba'
}

// let select = database.select('*').from("T411PASI")
// console.log(select.toQuery())
// select.then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })


let insert = database.insert(dados).into("T411PASI")
console.log(insert.toQuery())

insert.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})

let select2 = database.select('*').from("T411PASI").where({CD_KEY:'blau'})
console.log(select2.toQuery())
select2.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})


