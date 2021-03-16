let conn =require('./db-mysql')
let path = require('path')

module.exports ={

    getEmails(){
        return new Promise( (resolve, reject)=>{
            conn.query(
                `
                    select * from tb_emails order by email
                `,
                (error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(results)
                    }
                })
        })
    },

    delete(id){
        return new Promise((resolve, reject)=>{
            let query =`
                delete 
                from tb_emails
                where id = ?
            `
            let params = [
                id
            ]


            conn.query(
                query,
                params,
                (error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(results)
                    }
                }
            )
        })
    },
}