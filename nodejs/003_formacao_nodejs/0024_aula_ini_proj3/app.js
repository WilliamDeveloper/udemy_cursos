const Reader = require('./uteis/Reader')
const ProcessorCSV = require('./uteis/ProcessorCSV')
const Table = require('./uteis/Table')
const HtmlParser = require('./uteis/HtmlParser')

let leitor = new Reader()
let filepath = "./arquivo.csv"

async function main() {
    let dados = await leitor.Read(filepath)
    let dadosProcessados = ProcessorCSV.Process(dados)

    let usuarios = new Table(dadosProcessados)

    let html = HtmlParser.Parse(usuarios)

    console.log("res: ",usuarios)
    console.log("res: ",usuarios.RowCount)
    console.log("res: ",usuarios.ColumnCount)
    console.log("res: ",html)

}

main();

