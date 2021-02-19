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