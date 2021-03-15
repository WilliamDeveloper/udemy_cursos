let conn =require('./db-mysql')
let path = require('path')

module.exports ={

    getMenus(){
        return new Promise( (resolve, reject)=>{
            conn.query(
                `
                    select * from tb_menus order by title
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

            fields.photo = `images/${path.parse(files.photo.path).base}`


            let query
            let queryPhoto = ''
            let params

            params = [
                fields.title,
                fields.description,
                fields.price,
            ]

            if(files.photo.name){
                queryPhoto = ", photo = ?"
                params.push(fields.photo)
            }

            if(parseInt(fields.id) > 0){
                params.push(fields.id)

                query = `
                    update tb_menus
                    set title = ?,
                        description = ?,
                        price = ?
                        ${queryPhoto}
                    where id = ?
                `

            }else{
                if(!files.photo.name){
                    reject('Envie a foto do prato')
                }

                query = `
                    insert into tb_menus (title, description, price, photo)
                    values (?,?,?,?)
                `

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
                from tb_menus
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
    }
}