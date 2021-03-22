var reservations = require("../inc/reservations");
var contacts = require("../inc/contacts");

var express = require('express');
var router = express.Router();
var conn = require('./../inc/db-mysql')
var menus = require('./../inc/menus')
var emails = require('./../inc/emails')



module.exports  = function (io) {
  /* GET home page. */
  router.get('/', function(req, res, next) {

    let params =  {
      isHome: true,
      title: 'Restaurante Saborosoo! - FALA AI Donofrio, Lucas, Fabiano e Joedes da Verde !! by Will'
    }

    menus.getMenus().then(results=>{
      params.menus= results
      res.render('index', params);
    })

  });

  router.get('/contacts', function(req, res, next) {
    contacts.render(req,res)
  })


  router.post('/contacts', function(req, res, next) {

    if(!req.body.name){contacts.render(req,res, "digite o nome")}
    else if(!req.body.email){contacts.render(req,res, "digite o nome")}
    else if(!req.body.message){contacts.render(req,res, "digite o nome")}
    else{
      // res.json(req.body)
      contacts.save(req.body).then(results=>{
        console.log('blau')
        req.body = {}
        io.emit('dashboard update')
        contacts.render(req,res,null, 'reserva realizada com sucesso')
      }).catch(error=>{
        // reservations.render(req,res.message,error)
      })

    }

    // let params ={
    //   title: `Contato - Restaurante Saboroso`,
    //   background : 'images/img_bg_3.jpg',
    //   h1: 'Diga um oii!'
    // }
    // res.render('contacts', params)
  })

  router.get('/menus', function(req, res, next) {
    let params = {
      title: `Menus - Restaurante Saboroso`,
      background : 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menuuu!!'
    }

    menus.getMenus().then(results=>{
      params.menus =  results
      res.render('menus', params);
    })

  })

  router.get('/reservations', function(req, res, next) {
    reservations.render(req,res)
  })

  router.post('/reservations', function(req, res, next) {
    if(!req.body.name){reservations.render(req,res, "digite o nome")}
    else if(!req.body.email){reservations.render(req,res, "digite o nome")}
    else if(!req.body.people){reservations.render(req,res, "digite o nome")}
    else if(!req.body.date){reservations.render(req,res, "digite o nome")}
    else if(!req.body.time) {reservations.render(req,res, "digite o nome")}
    else{
      // res.json(req.body)
      reservations.save(req.body).then(results=>{
        console.log('blau')
        req.body = {}
        io.emit('dashboard update')
        reservations.render(req,res,null, 'reserva realizada com sucesso')
      }).catch(error=>{
        // reservations.render(req,res.message,error)
      })

    }


  })

  router.get('/services', function(req, res, next) {
    let params = {
      title: `Serviços - Restaurante Saboroso`,
      background : 'images/img_bg_1.jpg',
      h1: 'É um prazer poder servir!'
    }
    res.render('services', params )
  })

  router.post('/subscribe', function(req, res, next) {

    console.log('email ',req.body)
    console.log('email ',req.fields)

    emails.save(req).then(results=>{
      console.log('results ',results)
      io.emit('dashboard update')
      res.send(results)
    }).catch(error=>{
      console.log('error ',error)
      res.end(error)
    })

  })

  return router
}