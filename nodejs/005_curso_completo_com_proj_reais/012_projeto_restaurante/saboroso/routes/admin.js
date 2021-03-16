var express = require('express');

var users = require('./../inc/users')
var menus = require('./../inc/menus')
var admin = require('./../inc/admin')
var reservations = require('./../inc/reservations')
var contacts = require('./../inc/contacts')
var emails = require('./../inc/emails')
var  moment = require('moment')



var router = express.Router();

//idiomma moment.js momentjs
moment.locale('pt-BR')

router.use((req,res,next)=>{
    console.log('middleware: ', req.url)

    let isNotRouteExcession = ['/login'].indexOf(req.url) === -1
    if( isNotRouteExcession && !req.session.user){
        res.redirect('/admin/login')
    }else{
        next()
    }


})

router.use((req,res,next)=>{
    req.menus = admin.getMenus(req)
    next()
})


router.get('/logout', function(req, res, next) {

    delete req.session.user
    res.redirect('admin/login')
})



router.get('/', function(req, res, next) {
    let params ={
        // menus: req.menus,
        // user: req.session.user,
    }

    admin.dashboard().then( data =>{
        params.data = data
        params =  admin.getParams(req, params)
        res.render('admin/index', params)
    }).catch(error=>{
        res.end('a'+error)
    })


})


router.get('/login', function(req, res, next) {



    users.render(req,res)
})

router.post('/login', function(req, res, next) {

    if(!req.body.email){ users.render(req,res, "digite um email")}
    else if(!req.body.password){ users.render(req,res, "digite um password")}
    else {

        users.login(req.body.email, req.body.password).then( user=>{

            req.session.user = user

            req.body= {}
            res.redirect("/admin")

        }).catch( error=>{
            users.render(req,res, error)
        })



    }



})

router.get('/login_teste_session', function(req, res, next) {

    if(!req.session.views){
        req.session.views =  0
    }

    console.log('session ', req.session.views++)

    let params ={

    }
    res.render('admin/login', params)
})

router.get('/contacts', function(req, res, next) {
    contacts.getContacts().then(data=>{

        let params ={
            data
        }
        params =  admin.getParams(req, params)
        res.render('admin/contacts', params)

    })
})

router.post('/contacts', function(req, res, next) {

    contacts.getContacts().then(data=>{

        let params ={
           data
        }
        params =  admin.getParams(req, params)
        res.render('admin/contacts', params)

    })


})

router.delete('/contacts/:id', function(req, res, next) {
    contacts.delete(req.params.id).then(results=>{

        res.send(results)
    }).catch(error=>{
        res.send(error)
    })

})


router.get('/emails', function(req, res, next) {

    emails.getEmails().then(data=>{
        let params ={
            data
        }

        params =  admin.getParams(req, params)
        res.render('admin/emails', params)
    })

})


router.delete('/emails/:id', function(req, res, next) {

    emails.delete(req.params.id).then(results=>{
       res.send(results)
    }).catch(error=>{
        res.send(error)
    })

})


router.post('/menus', function(req, res, next) {
    let params ={
        // menus: req.menus,
        // user: req.session.user,
    }

    menus.save(req.fields, req.files).then((results)=>{
        res.send(results)
    }).catch(error=>{
        res.send(error)
    })
})

router.delete('/menus/:id', function(req, res, next) {
    menus.delete(req.params.id).then(results=>{
        res.send(results)
    }).catch(error=>{
        res.send(error)
    })
})

router.get('/menus', function(req, res, next) {
    let params ={
        // menus: req.menus,
        // user: req.session.user,
    }

    menus.getMenus().then(data=>{
        params.data = data
        params =  admin.getParams(req, params)
        res.render('admin/menus', params)
    })

})

router.get('/reservations', function(req, res, next) {

    reservations.getReservations().then(data=>{
        let params ={
            // menus: req.menus,
            // user: req.session.user,
            date : {},
            data : data,
            moment
        }
        params =  admin.getParams(req, params)
        res.render('admin/reservations', params)
    })

})

router.post('/reservations', function(req, res, next) {
    let params ={
        // menus: req.menus,
        // user: req.session.user,
    }

    reservations.save(req.fields, req.files).then((results)=>{
        res.send(results)
    }).catch(error=>{
        res.send(error)
    })
})

router.delete('/reservations/:id', function(req, res, next) {
    reservations.delete(req.params.id).then(results=>{
        res.send(results)
    }).catch(error=>{
        res.send(error)
    })
})



router.get('/users', function(req, res, next) {

    users.getUsers().then(data=>{
        let params ={
            data
        }
        params =  admin.getParams(req, params)
        res.render('admin/users', params)
    }).catch(error=>{
        res.send(error)
    })

})

router.post('/users', function(req, res, next) {

    users.save(req.fields).then(results=>{
        res.send(results)
    }).catch(error=>{
        res.send(error)
    })
})


router.delete('/users/:id', function(req, res, next) {
    users.delete(req.params.id).then(results=>{
        res.send(results)
    }).catch(error=>{
        res.send(error)
    })
})

router.post('/users/password-change', function(req, res, next) {

    users.changePassword(req).then(results=>{
        res.send(results)
    }).catch(error=>{
        res.send({error})
    })
})




module.exports = router