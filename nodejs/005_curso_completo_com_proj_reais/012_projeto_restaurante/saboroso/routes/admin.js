var express = require('express');
var router = express.Router();

var conn = require('./../inc/db-mysql')
var menus = require('./../inc/menus')

router.get('/', function(req, res, next) {
    let params ={

    }
    res.render('admin/index', params)
})

module.exports = router