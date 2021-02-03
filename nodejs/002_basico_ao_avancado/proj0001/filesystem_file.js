const fs = require('fs');

const {writeFile} = require('fs');

writeFile("arquivo.txt", "criando arquivo", (err)=>{
    if(err) throw err;
    console.log('arquivo escrito')
})