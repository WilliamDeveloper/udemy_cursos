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

  res.render('contacts', { title: `Contato - Restaurante Saboroso`})
})

router.get('/menus', function(req, res, next) {
  res.render('menus', { title: `Menus - Restaurante Saboroso`})
})

router.get('/reservations', function(req, res, next) {
  res.render('reservations', { title: `Reservas - Restaurante Saboroso`})
})

router.get('/services', function(req, res, next) {
  res.render('services', { title: `Serviços - Restaurante Saboroso`})
})

module.exports = router;
