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


    //------
    getUsers(){
        return new Promise( (resolve, reject)=>{
            conn.query(
                `
                    select * from tb_users order by name
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

    save(fields, files){
        return new Promise( (resolve, reject)=>{

            let query
            let params

            params = [
                fields.name,
                fields.email
            ]

            if(parseInt(fields.id) > 0){
                params.push(fields.id)

                query = `
                    update tb_users
                    set name = ?,
                        email = ?                                           
                    where id = ?
                `

            }else{

                query = `
                    insert into tb_users (name, email, password)
                    values (?,?,?)
                `
                params.push(fields.password)
            }

            console.log('query ', query, params)

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

    delete(id){
        return new Promise((resolve, reject)=>{
            let query =`
                delete 
                from tb_users
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

    changePassword(req){
        return new Promise( (resolve, reject)=>{

            if(!req.fields.password){
                reject('Preencha a senha')
            }else if( req.fields.password !== req.fields.passwordConfirm){
                reject('Confirme a senha corretamente')
            }else{
                let query = `
                    update tb_users
                    set password = ?
                    where id = ?
                `
                let params=[
                    req.fields.password,
                    req.fields.id
                ]

                console.log('query ', query, params)

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

            }
        })
    },

}