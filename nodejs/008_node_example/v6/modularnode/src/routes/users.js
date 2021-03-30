const router = require('express').Router()
const UsersController = require('../controllers/users')

router.get('/', UsersController.index)

module.exports =  router