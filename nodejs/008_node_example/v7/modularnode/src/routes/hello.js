const router = require('express').Router()
const HelloController = require('../controllers/hello')

router.get('/', HelloController.helloWorld)

module.exports =  router