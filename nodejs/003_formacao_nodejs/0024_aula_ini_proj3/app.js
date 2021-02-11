const Reader = require('./file/Reader')

let leitor = new Reader()
let filepath = "./arquivo.csv"
let resultado = leitor.Read(filepath)
console.log(resultado)
