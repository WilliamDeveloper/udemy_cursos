var conn = require('./db-mysql')



module.exports ={

    render(req,res,error, success){
        let params = {
            title: `Reservas - Restaurante Saboroso`,
            background : 'images/img_bg_2.jpg',
            h1: 'Reserve uma Mesa!',
            error,
            success,
            body:req.body
        }
        res.render('reservations', params )
    },

    save(fields){
        return new Promise((resolve, reject)=>{

            let query
            let params


            if(fields.date.indexOf('/') > -1){
                let date = fields.date.split('/')
                fields.date = `${date[2]}-${date[1]}-${date[0]}`
            }

            params =[
                fields.name,
                fields.email,
                fields.people,
                fields.date,
                fields.time,
            ]
            
            if (parseInt(fields.id) > 0){
                query =`
                    update tb_reservations
                    set
                    name = ?,
                    email = ?,
                    people = ?,
                    date = ?,
                    time = ?
                    where id = ?
                `
                params.push(fields.id)
            }else{
                query =`
                    insert 
                    into tb_reservations (name, email, people, date, time) 
                    values (?,?,?,?,?)
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

    getReservations(){
        return new Promise( (resolve, reject)=>{
            conn.query(
                `
                    select * from tb_reservations order by date desc
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

}