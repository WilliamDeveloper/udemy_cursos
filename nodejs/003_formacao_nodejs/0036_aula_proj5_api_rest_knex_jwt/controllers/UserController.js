import const_ from '../constantes/constantes'

class UserController{

    async index(req, res){
        res.send("APP EXPRESS! - user controller");
    }

    async create(req, res){
        let {email, nome, password} = req.body

        if(email == undefined){
            res.status('400')
            res.json({msg: const_.msgCodeHttp['400'] })
        }


        res.send("APP EXPRESS! - corpo resquisicao",email);
    }

}

module.exports = new UserController();