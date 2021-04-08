const router = require('express').Router()
const RoboController = require('../controllers/robo')

router.get('/', RoboController.robo_acoes)
router.get('/abrir-browser-ff', RoboController.abrir_browser_ff)
router.get('/abrir-browser-chrome', RoboController.abrir_browser_chrome)
router.get('/fechar-browser', RoboController.fechar_browser)


module.exports =  router
