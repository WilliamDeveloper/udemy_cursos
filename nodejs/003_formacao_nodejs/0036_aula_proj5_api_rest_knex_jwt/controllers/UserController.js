const const_ = require ('../constantes/constantes')
const User = require('../models/User')

class UserController{

    //---------------------------------------------------------------------
    async index(req, res){
        try{
            let users = await User.findAll()
            res.json(users)
        }catch (e) {
            let httpStatusCode = const_.msg.httpStatusCode.code_406
            res.status( httpStatusCode.code )
            res.json({status: httpStatusCode.desc , params:{email,name,password}})
            return
        }

    }
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    async create(req, res){
        // let email = (req.body.email)?req.body.email:''
        // let name = (req.body.name)?req.body.name:''
        // let password = (req.body.password)?req.body.password:''
        let {email, name, password} = req.body

        if(email == undefined || email.length <= 0){
            let httpStatusCode = const_.msg.httpStatusCode.code_403
            res.status( httpStatusCode.code )
            res.json({status: httpStatusCode.desc })
            return
        }

        let isUserCadastrado = await User.findEmail(email)

        if(!isUserCadastrado){
            let hasInserted = await User.new(email,password,name)

            if(hasInserted){
                let httpStatusCode = const_.msg.httpStatusCode.code_200
                res.status( httpStatusCode.code )
                res.json({status: httpStatusCode.desc , params:{email,name,password}})
                return
            }
        }

        let httpStatusCode = const_.msg.httpStatusCode.code_406
        res.status( httpStatusCode.code )
        res.json({status: httpStatusCode.desc , params:{email,name,password}})
        return

    }
    //---------------------------------------------------------------------

}

module.exports = new UserController();