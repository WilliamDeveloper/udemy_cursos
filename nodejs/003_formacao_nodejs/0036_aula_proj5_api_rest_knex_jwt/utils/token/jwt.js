const jwt = require('jsonwebtoken')
const const_ = require('../../constantes/const_')


async function authenticate(token) {

    try{
        await jwt.verify(token, const_.credentials.jwt_secret , (error, data)=>{

            if(error){
                console.log(error)
                return {success: false, error:'falhar ao autenticar : '+error}
            }else{
                console.log(data)
                return {success: true, data: data}
            }

        })
    }catch (e) {
        return {success: false, error:'falhar jwt.verify : '+e}
    }



}

const objModulo = {
    authenticate,

}

module.exports = objModulo

