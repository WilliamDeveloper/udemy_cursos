const const_ = require ('../constantes/constantes')

class UserController{

    async index(req, res){
        res.send("APP EXPRESS! - user controller");
    }

    async create(req, res){
        // let email = (req.body.email)?req.body.email:''
        // let name = (req.body.name)?req.body.name:''
        // let password = (req.body.password)?req.body.password:''
        let {email, name, password} = req.body

        if(email == undefined || email.length <= 0){
            let httpStatusCode = const_.msg.httpStatusCode.code_403
            res.status(httpStatusCode.code)
            res.json({msg: httpStatusCode.desc })
        }

        res.status('200')
        res.send(`APP EXPRESS! - corpo resquisicao ${email} ${name} ${password}`);
    }

}

module.exports = new UserController();