var conn = require('./db-mysql')

module.exports ={

    render(req,res,error, success){
        let params = {
            title: `Reservas - Restaurante Saboroso`,
            background : 'images/img_bg_2.jpg',
            h1: 'Reserve uma Mesa!',
            error,
            success
        }
        res.render('reservations', params )
    },

    save(fields){
        return new Promise((resolve, reject)=>{
            conn.query(
                `
                insert 
                into tb_reservations (name, email, people, date. time) 
                values (?,?,?,?,?)
            `,
                [
                    fields.name,
                    fields.email,
                    fields.people,
                    fields.date,
                    fields.time,
                ],(error, results)=>{
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