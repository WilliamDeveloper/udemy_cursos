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

    }
  })

  res.render('index', {
    title: 'Restaurante Saborosoo!',
    menus: results
  });
});

module.exports = router;
