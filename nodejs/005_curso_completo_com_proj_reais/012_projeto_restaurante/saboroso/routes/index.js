var express = require('express');
var router = express.Router();
var conn = require('./../inc/db-mysql')

/* GET home page. */
router.get('/', function(req, res, next) {


  conn.query(
      `
    select * from tb_menus order by title
  `,
  (error, results)=>{
    if(error){
      res.json(error)
    }else{
      res.render('index', {
        title: 'Restaurante Saborosoo!',
        menus: results
      });
    }
  })


});

router.get('/contacts', function(req, res, next) {

  let params ={
    title: `Contato - Restaurante Saboroso`,
    background : 'images/img_bg_3.jpg',
    h1: 'Diga um oii!'
  }
  res.render('contacts', params)
})

router.get('/menus', function(req, res, next) {
  let params = {
    title: `Menus - Restaurante Saboroso`,
    background : 'images/img_bg_1.jpg',
    h1: 'Saboreie nosso menuuu!!'
  }
  res.render('menus', params )
})

router.get('/reservations', function(req, res, next) {
  let params = {
    title: `Reservas - Restaurante Saboroso`,
    background : 'images/img_bg_3.jpg',
    h1: 'Diga um oii'
  }
  res.render('reservations', params )
})

router.get('/services', function(req, res, next) {
  let params = {
    title: `Serviços - Restaurante Saboroso`,
    background : 'images/img_bg_3.jpg',
    h1: 'Diga um oii'
  }
  res.render('services', params )
})

module.exports = router;
