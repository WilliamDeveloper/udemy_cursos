// const fs = require('fs');
// const {writeFile} = require('fs');
//
// writeFile("arquivo.txt", "criando arquivo", (err)=>{
//     if(err) throw err;
//     console.log('arquivo escrito')
// })


// const {promisify} = require('util');
// const {writeFilePromisify} = promisify(require('fs').writeFile);
//
// writeFilePromisify("arquivoPromisify.txt", 'sjkdhaijsdhasidhjauish')
//     .then((resultado)=>{
//         console.log('sucessso')
//     })
//     .catch((err)=>{
//         console.log('erro')
//     })

const fs = require('fs');
const {writeFile} = require('fs');

function criaArquivo(name, content) {
    return new Promise((resolve, reject) => {
        writeFile(name, content, (err)=>{
            if(err) return reject(err);
            resolve()
        })
    });
}

criaArquivo('arquivo2.txt', 'pimba blau')