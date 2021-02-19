const const_ = require('../constantes/const_')
const utils_ = require('../utils/utils_')
const jwt = require('jsonwebtoken')


async function auth(req, res, next){

    const authToken = req.headers['authorization']
    // console.log('token: ',authToken)

    if(authToken != undefined){
        let tokenArraySplit = authToken.split(" ");
        let token;

        if( tokenArraySplit.length > 1 ){
            token = tokenArraySplit[1]
        }else{
            token = tokenArraySplit[0]
        }

        console.log('token->', token)


        let result = await utils_.jwt.isValidToken(token)
        // console.log('result-authenticate: ',result)

        if(result.success){
            req.token = token
            req.userLoggedInfo=result.userLoggedInfo
            next()
            return
        }else{
            res.status(const_.msg.httpStatusCode.code_401.code)
            res.json({success:false, status: const_.msg.httpStatusCode.code_401.desc })
            return
        }

    }else{
        res.status(const_.msg.httpStatusCode.code_401.code)
        res.json({success:false, status: const_.msg.httpStatusCode.code_401.desc })
        return
    }
}

module.exports = auth