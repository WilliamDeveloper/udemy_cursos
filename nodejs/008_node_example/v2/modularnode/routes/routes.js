const router = require('express').Router()

// const TestController = require('./../src/controllers/index')
// colocar no arquivo raiz
// global.__base = __dirname + '/';
const TestController = require(`${__base}`+'/src/controllers/index')

router.get('/', TestController.helloWorld)

module.exports =  router