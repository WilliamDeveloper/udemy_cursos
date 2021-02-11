const fs = require("fs");

class Reader{
    Read(filepath,readFileOptions=undefined){
        if(!readFileOptions){
            readFileOptions={encoding:'utf-8'}
        }
        fs.readFile(filepath,readFileOptions, (err, data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })
    }
}

module.exports = Reader