var conn = require('./db-mysql')

module.exports ={



    render(req,res,error, success){
        let params ={
            body : req.body,
            error,
            success
        }
        res.render('admin/login', params)
    },

    login(email, password){
        return new Promise((resolve, reject)=>{
            conn.query(
                `
                select * from tb_users where email = ?
            `,
                [
                    email
                ],(error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        if(results.length > 0 ){
                            let row = results[0]

                            if(row.password !== password){
                                reject('usuario ou senha incorretos')
                            }else{
                                resolve(row)
                            }

                        }else{
                            reject('usuario ou senha incorretos')
                        }

                    }
                }
            )
        })
    },

}