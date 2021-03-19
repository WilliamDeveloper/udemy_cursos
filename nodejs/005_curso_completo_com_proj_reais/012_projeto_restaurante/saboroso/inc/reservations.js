var conn = require('./db-mysql')
var Pagination = require('./../inc/Pagination')
var moment = require('moment')



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

    getReservations(req){
        return new Promise((resolve, reject)=>{
            let page = req.query.page
            let dtstart = req.query.start
            let dtend = req.query.end

            if(!page) page = 1

            let params = []

            if (dtstart && dtend) params.push(dtstart,dtend)

            let query =  `
                    select 
                    sql_calc_found_rows
                    * 
                    from tb_reservations 
                    ${(dtstart && dtend)? ' where date between ? and ?':''}
                    order by name
                    limit ?,?
                `


            let pag = new Pagination(query, params)
            pag.getPage(page).then(data=>{
                resolve({
                    data,
                    links : pag.getNavigation(req.query)
                })
            })
        })



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

    chart(req){

        let query = `
                select
                concat(year(date), '-', month(date)) as date,
                count(*) as total,
                sum(people) / count(*) as avg_people
                from tb_reservations
                where
                date between ? and ?
                group by year(date) desc, month(date) desc
                order by year(date) desc, month(date) desc 
        `;
        let params = [
            req.query.start,
            req.query.end
        ]

        return new Promise((resolve, reject)=>{
            conn.query(
                query,
                params,
                (error, results)=>{
                    if(error){
                        reject(error)
                    }else{

                        let months = []
                        let values = []

                        results.forEach(row=>{
                            months.push(moment(row.date).format('MMM YYYY'))
                            values.push(row.total)
                        })

                        let resp = {
                            months,
                            values
                        }

                        resolve(resp)
                    }
                }
            )
        })

    }


}