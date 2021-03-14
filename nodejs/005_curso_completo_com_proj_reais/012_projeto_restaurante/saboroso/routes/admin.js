var express = require('express');
var router = express.Router();

var conn = require('./../inc/db-mysql')
var users = require('./../inc/users')
var menus = require('./../inc/menus')
var admin = require('./../inc/admin')



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
    let params ={
        // menus: req.menus,
        // user: req.session.user,
    }
    params =  admin.getParams(req, params)
    res.render('admin/contacts', params)
})


router.get('/emails', function(req, res, next) {
    let params ={
        // menus: req.menus,
        // user: req.session.user,
    }

    params =  admin.getParams(req, params)
    res.render('admin/emails', params)
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
    let params ={
        // menus: req.menus,
        // user: req.session.user,
        date : {},
    }
    params =  admin.getParams(req, params)
    res.render('admin/reservations', params)
})


router.get('/users', function(req, res, next) {
    let params ={
        // menus: req.menus,
        // user: req.session.user,
    }
    params =  admin.getParams(req, params)
    res.render('admin/users', params)
})



module.exports = router