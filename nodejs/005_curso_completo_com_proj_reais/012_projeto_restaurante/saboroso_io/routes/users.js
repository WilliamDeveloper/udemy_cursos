var express = require('express');
var router = express.Router();

var conn = require('./../inc/db-mysql')



module.exports  = function (io) {

  /* GET users listing. */
  router.get('/', function(req, res, next) {
    conn.query("select * from tb_users order by name", (error, results)=>{
      if(error){
        res.json(error)
      }else{
        res.json(results)
      }
    })

  });

  return router
}
