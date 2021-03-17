var conn = require('./db-mysql')
var Pagination = require('./../inc/Pagination')



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

    getReservations(page, dtstart, dtend){
        if(!page) page = 1

        let params = []

        if (dtstart && dtend) params.push(dtstart,dtend)

        let query =  `
                    select 
                    sql_calc_found_rows
                    * 
                    from tb_reservations 
                    ${(dtstart && dtend)? 'where date between ? and ?':''}
                    order by name
                    limit ?,?
                `


        let pag = new Pagination(query, params)
        return pag.getPage(page)
        // return new Promise( (resolve, reject)=>{
        //     conn.query(
        //        query,
        //         params,
        //         (error, results)=>{
        //             if(error){
        //                 reject(error)
        //             }else{
        //                 resolve(results)
        //             }
        //         })
        // })
    },

    delete(id){
        return new Promise((resolve, reject)=>{
            let query =`
                delete 
                from tb_reservations
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