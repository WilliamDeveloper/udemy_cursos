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

            conn.query(
                `
                    insert into tb_menus (title, description, price, photo)
                    values (?,?,?,?)
                `,
                [
                    fields.title,
                    fields.description,
                    fields.price,
                    fields.photo
                ],
                (error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(results)
                    }
                })
        })
    }
}