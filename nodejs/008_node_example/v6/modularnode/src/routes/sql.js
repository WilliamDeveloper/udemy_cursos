const router = require('express').Router()
const SqlController = require('../controllers/sql')

router.get('/select', SqlController.select)
router.post('/select', SqlController.select)

router.get('/update', SqlController.update)
router.post('/update', SqlController.update)

router.get('/insert', SqlController.insert)
router.get('/delete', SqlController.delete)

module.exports =  router