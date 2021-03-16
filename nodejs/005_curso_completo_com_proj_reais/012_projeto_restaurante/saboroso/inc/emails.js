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

    save(req){
        console.log('email ',req.body, req.fields)
        return new Promise((resolve, reject)=>{

            if(!req.fields.email){reject('preencha o email')}
            else {

                let query = `
                  insert into 
                  tb_emails (email)
                  values (?)
              `
                let params = [
                    req.fields.email
                ]


                conn.query(
                    query,
                    params,
                    (error, results) => {
                        if (error) {
                            reject(error)
                        } else {
                            resolve(results)
                        }
                    }
                )
            }

        })
    }
}