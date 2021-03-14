var conn = require('./db-mysql')

module.exports ={

    dashboard(){


        return new Promise((resolve, reject)=>{
            conn.query(
                `
                SELECT
                    (SELECT COUNT(*) FROM tb_contacts) AS nrcontacts,
                    (SELECT COUNT(*) FROM tb_menus) AS nrmenus,
                    (SELECT COUNT(*) FROM tb_reservations) AS nrreservations,
                    (SELECT COUNT(*) FROM tb_users) AS nrusers;
                `,
                (error, results)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(results[0])
                    }
                }
            )
        })
    },

    getParams(req, params){
        return Object.assign({},{
            menus: req.menus,
            user: req.session.user
        }, params)
    },

    render(req,res,error, success){
        let params ={
            body : req.body,
            error,
            success
        }
        res.render('admin/login', params)
    },

    getMenus(req){
       let menus =  [
           {
               text : 'Tela Inicial',
               href:"/admin/",
               icon:'home',
               active: false
           },
           {
               text : 'Menu',
               href:"/admin/menus",
               icon:'cutlery',
               active: false
           },
           {
               text : 'Reservas',
               href:"/admin/reservations",
               icon:'calendar-check-o',
               active: false
           },
           {
               text : 'Contatos',
               href:"/admin/contacts",
               icon:'comments',
               active: false
           },
           {
               text : 'Usuários',
               href:"/admin/users",
               icon:'users',
               active: false
           },
           {
               text : 'E-mails',
               href:"/admin/emails",
               icon:'envelope',
               active: false
           },
       ]

        menus.map(menu=> {
            console.log('blau',  menu , req.url)
            if(menu.href == `/admin${req.url}`){
                console.log('pimba')
                menu.active = true
            }
        })

        return menus
    },

}