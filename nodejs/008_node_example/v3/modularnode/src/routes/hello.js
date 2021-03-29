const router = require('express').Router()

// const TestController = require('./../src/controllers/index')
// colocar no arquivo raiz
// global.__base = __dirname + '/';
// const TestController = require(`${__base}`+'/src/controllers/index')
// const TestController = require('./../controllers/index')
const HelloController = require('../controllers/hello')

router.get('/', HelloController.helloWorld)

module.exports =  router