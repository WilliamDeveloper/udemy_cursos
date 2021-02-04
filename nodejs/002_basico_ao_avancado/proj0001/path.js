const path = require('path')
//
// const nomeArquivo=`D:\\_dev_\\work\\github\udemy_cursos\\nodejs\\002_basico_ao_avancado\\proj0001\\basico_exemplo.html`
// console.log(path.normalize(nomeArquivo))

console.log(path.basename('D:/_dev_/work/github/udemy_cursos/nodejs/002_basico_ao_avancado/proj0001/basico_exemplo.html'))
const folder1= path.join('/teste','teste2','teste3','teste4','..')
console.log(folder1)

console.log(path.resolve('path.js'))
console.log(path.resolve('child_process.js'))
console.log(path.resolve('child_process2.js'))

console.log(path.extname('child_process2.js'))