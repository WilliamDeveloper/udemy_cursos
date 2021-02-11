const Reader = require('./file/Reader')
const ProcessorCSV = require('./file/ProcessorCSV')
const Table = require('./file/Table')

let leitor = new Reader()
let filepath = "./arquivo.csv"

async function main() {
    let dados = await leitor.Read(filepath)
    let dadosProcessados = ProcessorCSV.Process(dados)
    let usuarios = new Table(dadosProcessados)
    console.log("res: ",usuarios)
}

main();

