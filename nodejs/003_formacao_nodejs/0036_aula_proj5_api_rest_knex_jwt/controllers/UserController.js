const const_ = require ('../constantes/constantes')
const User = require('../models/User')
const PasswordToken = require('../models/PasswordToken')

class UserController {

    //---------------------------------------------------------------------
    async index(req, res) {
        try {
            let users = await User.findAll()
            // let users = await User.findById(10)
            res.json(users)
        } catch (e) {
            let httpStatusCode = const_.msg.httpStatusCode.code_406
            res.status(httpStatusCode.code)
            res.json({status: httpStatusCode.desc, params: {email, name, password}})
            return
        }

    }

    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    async findUser(req, res) {
        try {
            let id = req.params.id
            let user = await User.findById(id)

            if (user == undefined) {
                res.status(const_.msg.httpStatusCode.code_404.code)
                res.json({status: const_.msg.httpStatusCode.code_404.desc})
                return;
            } else {
                res.status(const_.msg.httpStatusCode.code_200.code)
                res.json({user: user})
                return;
            }

        } catch (e) {
            console.log(e)
            let httpStatusCode = const_.msg.httpStatusCode.code_406
            res.status(httpStatusCode.code)
            res.json({status: httpStatusCode.desc})
            return;
        }

    }

    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    async create(req, res) {
        // let email = (req.body.email)?req.body.email:''
        // let name = (req.body.name)?req.body.name:''
        // let password = (req.body.password)?req.body.password:''
        let {email, name, password} = req.body

        if (email == undefined || email.length <= 0) {
            let httpStatusCode = const_.msg.httpStatusCode.code_403
            res.status(httpStatusCode.code)
            res.json({status: httpStatusCode.desc})
            return
        }

        let isUserCadastrado = await User.findEmail(email)

        if (!isUserCadastrado) {
            let hasInserted = await User.new(email, password, name)

            if (hasInserted) {
                let httpStatusCode = const_.msg.httpStatusCode.code_200
                res.status(httpStatusCode.code)
                res.json({status: httpStatusCode.desc, params: {email, name, password}})
                return
            }
        }

        let httpStatusCode = const_.msg.httpStatusCode.code_406
        res.status(httpStatusCode.code)
        res.json({status: httpStatusCode.desc, params: {email, name, password}})
        return

    }

    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    async edit(req, res) {

        let {id, name, role, email} = req.body

        let result = await User.update(id, email, name, role)

        if (result != undefined) {
            if (result.status) {
                res.status(const_.msg.httpStatusCode.code_200.code)
                res.json({status: const_.msg.httpStatusCode.code_200.desc})
                return
            } else {
                res.status(const_.msg.httpStatusCode.code_406.code)
                res.json({status: const_.msg.httpStatusCode.code_406.desc})
                return
            }
        }

        res.status(const_.msg.httpStatusCode.code_406.code)
        res.json({status: const_.msg.httpStatusCode.code_406.desc})
        return

    }

    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    async remove(req, res){
        let id =req.params.id

        let resultado = await User.delete(id)

        if(resultado.status){

            res.status(const_.msg.httpStatusCode.code_200.code)
            res.json({status: const_.msg.httpStatusCode.code_200.desc})
            return
        }else{
            res.status(const_.msg.httpStatusCode.code_406.code)
            res.json({status: const_.msg.httpStatusCode.code_406.desc})
            return
        }

    }
    //---------------------------------------------------------------------



    //---------------------------------------------------------------------
    async recoverPassword(req,res){
        let {email} = req.body

        let resultado = await PasswordToken.create(email)
        if(resultado.success){
            let token = resultado.token
            res.status(const_.msg.httpStatusCode.code_200.code)
            res.json({status: const_.msg.httpStatusCode.code_200.desc, token:token})
            return
        }else{
            res.status(const_.msg.httpStatusCode.code_406.code)
            res.json({status: const_.msg.httpStatusCode.code_406.desc, error:resultado.error})
            return
        }

    }

    //---------------------------------------------------------------------

}

module.exports = new UserController();