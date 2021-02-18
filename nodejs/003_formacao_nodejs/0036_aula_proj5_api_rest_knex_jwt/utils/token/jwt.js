const jwt = require('jsonwebtoken')
const const_ = require('../../constantes/const_')


async function authenticate(token) {
    try{
        let resultVerify = await jwt.verify(token, const_.credentials.jwt_secret)
        return {success: true, resultVerify}
    }catch (e) {
        return {success: false, error:'falhar ao autenticar : '+e}
    }
}







//------------------------------------------

const objModulo = {
    authenticate,

}

module.exports = objModulo

