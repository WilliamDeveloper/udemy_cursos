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


            let query, params

            if(parseInt(fields.id) > 0){
                query = `
                    update tb_menus
                    set title = ?,
                        description = ?,
                        price = ?,
                        photo = ?
                    where id = ?
                `
                params = [
                    fields.title,
                    fields.description,
                    fields.price,
                    fields.photo,
                    fields.id
                ]
            }else{
                query = `
                    insert into tb_menus (title, description, price, photo)
                    values (?,?,?,?)
                `
                params = [
                    fields.title,
                    fields.description,
                    fields.price,
                    fields.photo
                ]
            }

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