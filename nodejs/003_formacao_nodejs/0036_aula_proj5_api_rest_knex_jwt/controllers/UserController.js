const const_ = require ('../constantes/constantes')
const User = require('../models/User')
const PasswordToken = require('../models/PasswordToken')
const jwt = require('jsonwebtoken')
const jwt_secret="senha_secreta"
const bcrypt = require('bcrypt')


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


    //---------------------------------------------------------------------
    async changePassword(req,res){
        let {token, password} = req.body

        let result = await PasswordToken.validate(token)
        console.log('result-change-password ',result)
        if(result.success){

            let resultChange = await User.changePassword(password,result.token.user_id,result.token.token)

            res.status(const_.msg.httpStatusCode.code_200.code)
            res.json({status: const_.msg.httpStatusCode.code_200.desc})
            return
        }else{
            res.status(const_.msg.httpStatusCode.code_406.code)
            res.json({status: const_.msg.httpStatusCode.code_406.desc, error:result.error})
            return
        }

    }

    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    async login(req,res){
        let {email, password} = req.body
        let user = await User.findByEmail(email)

        if(user != undefined){
            let isValidPassword = await bcrypt.compare(password, user.password)
            res.status(const_.msg.httpStatusCode.code_200.code)
            res.json({success:true, status: const_.msg.httpStatusCode.code_200.desc,isValidPassword})
            return
        }else{
            res.status(const_.msg.httpStatusCode.code_406.code)
            res.json({success:false, status: const_.msg.httpStatusCode.code_406.desc, error: 'usuario nao encontrado'})
            return
        }

    }
    //---------------------------------------------------------------------

}

module.exports = new UserController();