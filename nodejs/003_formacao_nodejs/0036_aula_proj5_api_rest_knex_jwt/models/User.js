const knex = require('../database/connection')
const bcrypt = require('bcrypt')

class User{

    async new(name, email, password ){

        try{
            let dadosToInsert = {
                email,
                password,
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