var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");
var AdminAuth = require('../middleware/AdminAuth')


router.get('/autenticado',AdminAuth, HomeController.authenticado);

router.get('/', HomeController.index);

router.post('/user', UserController.create);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.findUser);
router.put('/user', UserController.edit);
router.delete('/user/:id', UserController.remove);

router.post('/recoverpassword', UserController.recoverPassword)
router.post('/changepassword', UserController.changePassword)

router.post("/login", UserController.login)

router.post("/validate", HomeController.validate)

module.exports = router;