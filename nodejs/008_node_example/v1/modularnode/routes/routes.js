const router = require('express').Router()

const TestController = require("@root/controllers/index")

router.get('/', TestController.helloWorld)

module.exports =  router