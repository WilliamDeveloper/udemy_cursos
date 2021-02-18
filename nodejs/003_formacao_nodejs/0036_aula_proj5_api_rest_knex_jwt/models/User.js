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
            if(result.length > 0){
                return result
                console.log(result)
            }else{
                return undefined
            }

        }catch (e) {
            console.log(e)
            return undefined
        }

    }

    async findById(id){
        try{
            let result = await knex
            // .select('*')
                .select([
                    'id',
                    'name',
                    'email',
                    'role'
                ])
                .where({id:id})
                .table('users')

            console.log(id)
            console.log(result[0])
            if(result.length > 0 ){
                return result[0]

            }else{
                return undefined
            }

        }catch (e) {
            console.log(e)
            return undefined
        }

    }

    async findByEmail(email){
        try{
            let result = await knex
            // .select('*')
                .select([
                    'id',
                    'name',
                    'email',
                    'role'
                ])
                .where({email:email})
                .table('users')

            console.log(id)
            console.log(result[0])
            if(result.length > 0 ){
                return result[0]

            }else{
                return undefined
            }

        }catch (e) {
            console.log(e)
            return undefined
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



    async update(id,email,name,role){

        let user = await this.findById(id)

        if(user != undefined){

            let editUser ={}

            if(email !=undefined){
                let result = await this.findEmail(email)
                if(result == false){
                    editUser.email = email
                }else{
                    return {
                        status : false,
                        error: "email ja existe"
                    }
                }
            }

            if(name !=undefined){
                editUser.name = name
            }

            if(role !=undefined){
                editUser.role = role
            }

            try{
                await knex
                    .update(editUser)
                    .where({id:id})
                    .table('users')

                return {
                    status : true
                }
            }catch (e) {
                console.log(e)
                return {
                    status : false,
                    error: e
                }
            }

        }else{
            return {
                status : false,
                error: "usuario nao existe"
            }
        }

    }

    async delete(id){
        let user = await this.findById(id)

        if(user != undefined){
            try{
                await knex
                    .delete()
                    .from('users')
                    .where({id:id})

                return {status:true}
            }catch (e) {
                return {status:false, error:e}
            }
        }else{
          return {status:false,error:"o usuario nao existe"}
        }
    }




}

module.exports = new User()