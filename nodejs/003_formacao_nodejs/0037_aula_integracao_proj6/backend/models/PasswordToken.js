const knex = require('../database/connection')
const User = require('./User')

class PasswordToken{
    async create(email){
       let user = await User.findByEmail(email)

        if(user != undefined){
            console.log(user)

            try{
                let token = Date.now()
                await knex
                    .insert({
                        user_id: user.id,
                        used:0,
                        token: token // da pra usar UUID ou GUID
                    })
                    .table('passwordtokens')

                return {success:true, token:token}
            }catch (e) {
                console.log(e)
                return {success:false, error:e}
            }

        }else{
            return {success:false, error:'o email nao existe no banco'}
        }

    }

    async validate(token){

        console.log(token)

        try{
            let result = await knex
                .select()
                .from('passwordtokens')
                .where({token:token})

            console.log('result-validate ', result)
            if(result.length >0){
                let resultToken = result[0]

                if(resultToken.used){
                    return {success:false, error:'token ja foi usado'}
                }else{
                    return {success:true, token:resultToken}
                }

            }else{
                return {success:false, error:'token invalido'}
            }


        }catch (e) {
            console.log(e)
            return {success:false, error:e}
        }

    }

    async setUsed(token){


        try{
            let result = await knex
                .update({
                    used:1
                })
                .from('passwordtokens')
                .where({
                    token: token
                })
            return {success:true}
        }catch (e) {
            console.log(e)
            return {success:false, error:e}
        }

    }
}

module.exports = new PasswordToken()