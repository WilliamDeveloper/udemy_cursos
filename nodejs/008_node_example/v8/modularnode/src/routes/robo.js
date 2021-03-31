const router = require('express').Router()
const RoboController = require('../controllers/robo')

router.get('/', RoboController.robo_acoes)


module.exports =  router
