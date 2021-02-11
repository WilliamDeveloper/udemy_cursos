const Reader = require('./file/Reader')
const ProcessorCSV = require('./file/ProcessorCSV')

let leitor = new Reader()
let filepath = "./arquivo.csv"

async function main() {
    let resultado = await leitor.Read(filepath)
    console.log(resultado)

    resultado = ProcessorCSV.Process(resultado)
    console.log("res: ",resultado)
}

main();

