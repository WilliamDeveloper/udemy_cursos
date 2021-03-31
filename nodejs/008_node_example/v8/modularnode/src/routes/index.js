const router = require('express').Router()
const IndexController = require('../controllers/index')

router.get('/', IndexController.index)
router.get('/home', IndexController.home)

router.get('/testes-sistemas', IndexController.testes_sistemas)

module.exports =  router
