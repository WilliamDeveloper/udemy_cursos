const fs = require('fs');

console.log( (process.hrtime()[0]/60).toFixed(5) );
console.log('antes da leitura do arquivo');

const dados = fs.readFileSync('file.txt');

console.log('depois da leitura do arquivo');
console.log( (process.hrtime()[0]/60).toFixed(5) );