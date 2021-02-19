const bcrypt = require('bcrypt')

async function generateHash(password){
    try{
        let salt = 10
        let hash =  await bcrypt.hash(password, salt);
        return {success:true, hash: hash}
    }catch (e) {
        console.log(e)
        return {success:false, error:'falha ao tentar gerar hash'+e}
    }
}



async function compareValueWithHash(passwordSemHash, passwordComHash){

    try{
        let isValidPassword = await bcrypt.compare(passwordSemHash, passwordComHash)
        if(isValidPassword){
            return {success:true}
        }else{
            return {success:false, error:'dado invalido'}
        }
    }catch (e) {
        console.log(e)
        return {success:false, error:'falha ao tentar comparar hash'+e}
    }
}
//------------------------------------------

const objModulo = {
    generateHash,
    compareValueWithHash,
}

module.exports = objModulo