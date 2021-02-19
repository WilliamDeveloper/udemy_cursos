const jwt = require('jsonwebtoken')
const const_ = require('../../constantes/const_')


async function isAuthenticated(token) {
    try{
        let resultVerify = await jwt.verify(token, const_.credentials.jwt_secret)
        return {success: true, resultVerify}
    }catch (e) {
        return {success: false, error:'falhar ao autenticar : '+e}
    }
}







//------------------------------------------

const objModulo = {
    isAuthenticated,

}

module.exports = objModulo

