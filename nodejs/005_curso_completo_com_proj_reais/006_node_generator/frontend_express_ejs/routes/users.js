var express = require('express');
var assert = require('assert')
var restify = require('restify-clients')
var router = express.Router();


var client = restify.createJSONClient({
  url: 'http://localhost:4000'
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('router.get',req.body, req.params)

  client.get("/users", function (err, request, response, obj) {
    assert.ifError(err)
    // console.log(JSON.stringify(obj,null,2))
    console.log(obj)

    res.json(obj)
  })

});


router.get('/:id', function(req, res, next) {
  console.log('router.get.id',req.body, req.params)
  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err)
    console.log(JSON.stringify(obj,null,2))

    res.json(obj)
  })

});

router.put('/:id', function(req, res, next) {
  console.log('router.put',req.body, req.params)
  client.put(`/users/${req.params.id}`, req.body,function (err, request, response, obj) {
    assert.ifError(err)
    console.log(JSON.stringify(obj,null,2))

    res.json(obj)
  })

});



router.delete('/:id', function(req, res, next) {
  console.log('router.delete',req.body, req.params)
  client.del(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err)
    console.log(JSON.stringify(obj,null,2))

    res.json(obj)
  })

});


router.post('/', function(req, res, next) {
  console.log('router.post',req.body, req.params)

  client.post(`/users`,  req.body,function (err, request, response, obj) {
    assert.ifError(err)
    console.log(JSON.stringify(obj,null,2))

    res.json(obj)
  })

});

module.exports = router;
