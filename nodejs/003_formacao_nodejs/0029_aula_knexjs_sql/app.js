let database = require('./database')



// let dados = {
//     CD_KEY : 'blau',
//     CD_VALUE : 'pimba'
// }

// let select = database.select('*').from("T411PASI")
// console.log(select.toQuery())
// select.then(data=>{
//     console.log(data)
// })
// .catch(err=>{
//     console.log(err)
// })


// let insert = database.insert(dados).into("T411PASI")
// console.log(insert.toQuery())
//
// insert.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })
//
// let select2 = database.select('*').from("T411PASI").where({CD_KEY:'blau'})
// console.log(select2.toQuery())
// select2.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })
//
// let select3 = database.select(['CD_KEY','CD_VALUE']).from("T411PASI").where({CD_KEY:'blau'})
// console.log(select3.toQuery())
// select3.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })
//
//
//
// let select4 = database
//     .select(['CD_KEY','CD_VALUE'])
//     .from("T411PASI")
//     .whereRaw(" cd_key like 'blau' ")
// console.log(select4.toQuery())
// select4.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

// let sql = database.raw(" insert into autorizador.t411pasi (CD_KEY, CD_VALUE) values ('blau', 'pimba') ")
// console.log(sql.toQuery())
// sql.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })


// let sql = database.raw(" update autorizador.t411pasi set cd_value='pimba2' where cd_key = 'blau'  ")
// console.log(sql.toQuery())
// sql.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

// let select5 = database.raw(" select * from autorizador.t411pasi where cd_key = 'blau' ")
// console.log(select5.toQuery())
// select5.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })

// let vDelete = database.raw(" delete from autorizador.t411pasi where cd_key = 'blau' ")
// console.log(vDelete.toQuery())
// vDelete.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })
//
// let select6 = database.raw(" select * from autorizador.t411pasi where cd_key = 'blau' ")
// console.log(select6.toQuery())
// select6.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })


// let sql2 = database.where({CD_KEY:'blau'}).update({CD_VALUE: 'BLAU3'}).table("T411PASI")
// console.log(sql2.toQuery())
// sql2.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })


// let select6 = database.raw(" select * from autorizador.t411pasi where cd_key = 'blau' ")
// console.log(select5.toQuery())
// select5.then(data=>{
//     console.log(data)
// }).catch(err=>{
//     console.log(err)
// })