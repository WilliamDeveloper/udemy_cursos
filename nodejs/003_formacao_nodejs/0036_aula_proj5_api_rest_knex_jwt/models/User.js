const knex = require('../database/connection')
const bcrypt = require('bcrypt')

class User{

    async findAll(){
        try{
            let result = await knex
                // .select('*')
                .select([
                    'id',
                    'name',
                    'email',
                    'role'
                ])
                .table('users')
            return result
        }catch (e) {
            console.log(e)
            return []
        }

    }

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
            return true;
        }catch (error) {
            console.log(error)
            return false;
        }
    }

    async findEmail(email){

        try{
            let resultado = await knex.select('*')
                .from('users')
                .where({email:email})

            console.log(resultado)
            if(resultado.length > 0){
                return true
            }else{
                return false
            }
        }catch (error) {
            console.log(error)
            return false
        }
    }




}

module.exports = new User()