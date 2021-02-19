const jwt = require('jsonwebtoken')
const const_ = require('../../constantes/const_')


async function isValidToken(token) {
    try{
        let resultVerify = await jwt.verify(token, const_.credentials.jwt_secret)
        return {success: true, resultVerify}
    }catch (e) {
        return {success: false, error:'falhar ao autenticar : '+e}
    }
}


async function generateToken(dadosParaGuardarNoToken) {
    let dados = dadosParaGuardarNoToken
    try{
        let token = await jwt.sign(dados,const_.credentials.jwt_secret)
        return { success:true, token:token }
    }catch (e) {
        console.log(e)
        return {success:false, error:'falha ao gerar token '+e}
    }

}





//------------------------------------------

const objModulo = {
    isValidToken,
    generateToken,
}

module.exports = objModulo

