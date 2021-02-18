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
}

module.exports = new PasswordToken()