const router = require('express').Router()

const TestController = require('@root/')

router.get('/', TestController.helloWorld)

module.exports =  router