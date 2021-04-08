const router = require('express').Router()
const BatController = require('../controllers/bat')

router.get('/clear-temp', BatController.clear_temp)
router.get('/clear-ff-profile-temp', BatController.clear_ff_profile_temp)



module.exports =  router
