var express = require('express');
var router = express.Router();

var conn = require('./../inc/db-mysql')
var menus = require('./../inc/menus')

router.get('/', function(req, res, next) {
    let params ={

    }
    res.render('admin/index', params)
})


router.get('/login', function(req, res, next) {

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

    }
    res.render('admin/contacts', params)
})


router.get('/emails', function(req, res, next) {
    let params ={

    }
    res.render('admin/emails', params)
})

router.get('/menus', function(req, res, next) {
    let params ={

    }
    res.render('admin/menus', params)
})

router.get('/reservations', function(req, res, next) {
    let params ={
        date : {}
    }
    res.render('admin/reservations', params)
})


router.get('/users', function(req, res, next) {
    let params ={

    }
    res.render('admin/users', params)
})



module.exports = router