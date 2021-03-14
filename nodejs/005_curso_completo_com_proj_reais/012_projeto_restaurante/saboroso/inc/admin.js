var conn = require('./db-mysql')

module.exports ={



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
               href:"/admin",
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