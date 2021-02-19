const utils_ = require('../utils/utils_')

class HomeController{

    async index(req, res){
        res.send("APP EXPRESS! - Guia do programador");
    }

    async authenticado(req, res){
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20uYnIiLCJyb2xlIjowLCJpYXQiOjE2MTM2OTkxNDl9.XAwrM6IPuClNLtBlnCU30AyD2zsPCVBI0xfo7FTNaps'

        let result = await utils_.jwt.isValidToken(token)
        console.log('result-authenticate: ',result)

        res.send("APP EXPRESS! - Guia do programador");
    }

}

module.exports = new HomeController();