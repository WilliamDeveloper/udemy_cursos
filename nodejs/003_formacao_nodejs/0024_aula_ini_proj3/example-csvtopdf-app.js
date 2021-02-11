const Reader = require('./uteis/Reader')
const Writer = require('./uteis/Writer')
const ProcessorCSV = require('./uteis/ProcessorCSV')
const Table = require('./uteis/Table')
const HtmlParser = require('./uteis/HtmlParser')
const PDFWriter = require('./uteis/PDFWriter')

const leitor = new Reader()
const escritor = new Writer()

let filepath = "./arquivo.csv"

async function main() {
    let dados = await leitor.Read(filepath)
    let dadosProcessados = ProcessorCSV.Process(dados)

    let usuarios = new Table(dadosProcessados)

    let html = await HtmlParser.Parse(usuarios)

    console.log("res: ",usuarios)
    console.log("res: ",usuarios.RowCount)
    console.log("res: ",usuarios.ColumnCount)
    console.log("res: ",html)

    let resp = await PDFWriter.WritePDF("./uteis/teste.pdf", html)
    if(resp){
        console.log('gravado com sucesso')
    }else{
        console.log('ocorreu uma falha na gravacao')
    }

}

main();

