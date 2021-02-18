const const_ = require('../constantes/constantes')
const jwt = require('jwt')


function auth(req, res, next){

    const authToken = req.headers['authorization']
    console.log(authToken)

    if(authToken != undefined){
        let tokenArraySplit = authToken.split(" ");
        let token;

        if( tokenArraySplit.length > 1 ){
            token = tokenArraySplit[1]
        }else{
            token = tokenArraySplit[0]
        }
        console.log(token)


        jwt.verify(token, const_.credentials.jwt_secret , (erro, data)=>{
            if(erro){
                res.status(const_.msg.httpStatusCode.code_401.code)
                res.json({success:false, status: const_.msg.httpStatusCode.code_401.desc })
            }else{
                console.log(data)
                req.token = token
                req.loggedUser = {
                    id: data.id,
                    email:data.email
                }
                next()
            }
        })
    }else{
        res.status(const_.msg.httpStatusCode.code_401.code)
        res.json({success:false, status: const_.msg.httpStatusCode.code_401.desc })
    }
}

module.exports = auth