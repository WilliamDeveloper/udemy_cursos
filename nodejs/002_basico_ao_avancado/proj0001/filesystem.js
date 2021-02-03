const fs = require('fs');

fs.readdir(__dirname,(err,data)=>{

    if(err) throw err;

    data.forEach((file)=>{
        console.log(__dirname+'\\' + file)
    })
})

//nao bloqueante
fs.readFile('file.txt',(err, data)=>{
    if(err) throw err;

    console.log('lendo arquivo: ', data.toString())
});

// bloqueante
const texto = fs.readFileSync('file.txt');
console.log('texto: ', texto);


fs.mkdir('projeto/assets/images', {recursive:true}, (err) =>{
    if (err) throw err

    console.log('diretorio criado com sucesso')
});


const assets = ['css', 'js', 'images', 'fonts', 'lib'];

function make(dirs) {
    dirs.forEach((dir)=>{
        fs.mkdir(`projeto/assets/${dir}`, {recursive:true}, (err) =>{
            if (err) throw err

            console.log('diretorio criado com sucesso')
        });
    })
}

make(assets)