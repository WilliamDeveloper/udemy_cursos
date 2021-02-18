const jwt = require('jsonwebtoken')

async function authenticate(token) {

    let resp = await jwt.verify(token, const_.credentials.jwt_secret , (error, data)=>{

        if(error){
            console.log(error)
            return {success: false, error:'falhar ao autenticar : '+error}
        }else{
            console.log(data)
            return {success: true, data: data}
        }

    })
    console.log('resp->',resp)
    return resp

}



module.exports = credentials