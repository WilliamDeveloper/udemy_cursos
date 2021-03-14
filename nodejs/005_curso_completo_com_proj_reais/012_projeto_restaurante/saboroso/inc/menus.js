let conn =require('./db-mysql')

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
            conn.query(
                `
                    insert into tb_menus (title, description, price, photo)
                    values (?,?,?,?)
                `,
                [
                    fields.title,
                    fields.description,
                    fields.price,
                    `ìmages/${files.photo.name}`
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