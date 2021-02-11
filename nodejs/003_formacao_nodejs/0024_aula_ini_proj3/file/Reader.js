const fs = require("fs");
const util = require('util');


class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async Read(filepath,readFileOptions=undefined){
        if(!readFileOptions){
            readFileOptions={encoding:'utf-8'}
        }

        let resultado;
        
        try{
            resultado = await this.reader(filepath,readFileOptions)
        }catch (err) {
            resultado = undefined
        }

        return resultado
    }
}

module.exports = Reader