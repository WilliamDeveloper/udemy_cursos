const knex = require('../database/connection')
const bcrypt = require('bcrypt')

class User{

    async new(email, password,name ){

        try{

            let hash =  await bcrypt.hash(password, 10);

            let dadosToInsert = {
                email,
                password: hash,
                name,
                role:0
            }
            await knex.insert(dadosToInsert).table('users')
        }catch (error) {
            console.log(error)
        }
    }




}

module.exports = new User()