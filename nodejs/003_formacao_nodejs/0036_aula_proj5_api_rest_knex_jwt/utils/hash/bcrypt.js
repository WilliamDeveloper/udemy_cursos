//npm install --save bcrypt
const bcrypt = require('bcrypt')

async function generateHash(valueToGenerateHash){
    try{
        let salt = 10
        let hash =  await bcrypt.hash(valueToGenerateHash, salt);
        return {success:true, hash: hash}
    }catch (e) {
        console.log(e)
        return {success:false, error:'falha ao tentar gerar hash'+e}
    }
}



async function compareValueWithHash(valueWithoutHash, valueWithmHash){

    try{
        let isValidHash = await bcrypt.compare(valueWithoutHash, valueWithmHash)
        if(isValidHash){
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