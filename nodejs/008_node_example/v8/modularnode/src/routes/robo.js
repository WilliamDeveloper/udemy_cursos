const router = require('express').Router()
const RoboController = require('../controllers/robo')

router.get('/', RoboController.robo_acoes)
router.get('/abrir-browser', RoboController.abrir_browser)
router.get('/fechar-browser', RoboController.fechar_browser)


module.exports =  router
