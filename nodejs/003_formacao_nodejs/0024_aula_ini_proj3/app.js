const Reader = require('./file/Reader')

let leitor = new Reader()
let filepath = "./arquivo.csv"

async function main() {
    let resultado = await leitor.Read(filepath)
    console.log(resultado)
}

main();

