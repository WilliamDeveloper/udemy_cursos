const utils_ = require('../utils/utils_')

class HomeController{

    async index(req, res){
        res.send("APP EXPRESS! - Guia do programador");
    }

    async authenticado(req, res){
        let token = req.token
        let userLoggedInfo = req.userLoggedInfo
        // console.log(token,userLoggedInfo)
        // let result = await utils_.jwt.isValidToken(token)
       // console.log('result-authenticate: ',result)

        res.send("APP EXPRESS! - Guia do programador");
    }

}

module.exports = new HomeController();