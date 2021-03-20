var conn = require('./db-mysql')

module.exports ={

    render(req,res,error, success){

        let params ={
            title: `Contato - Restaurante Saboroso`,
            background : 'images/img_bg_3.jpg',
            h1: 'Diga um oii!',
            error,
            success,
            body:req.body
        }

        res.render('contacts', params )
    },

    save(fields){
        return new Promise((resolve, reject)=>{

            conn.query(
                `
                insert 
                into tb_contacts (name, email, message) 
                values (?,?,?)
            `,
                [
                    fields.name,
                    fields.email,
                    fields.message,
                ],(error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(results)
                    }
                }
            )
        })
    },

    getContacts(){
        return new Promise( (resolve, reject)=>{
            conn.query(
                `
                    select * from tb_contacts order by register desc
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
                from tb_contacts
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