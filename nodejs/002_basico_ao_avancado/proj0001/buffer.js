const Buffer = require('buffer').Buffer

const buf = Buffer.from('curso completo de nodejs');

console.log(buf)
console.log(buf.toString())
console.log(buf.toString('utf16le'))


const buf2 = Buffer.from('curso completo de nodejs', 'utf-8');
console.log(buf2)
console.log(buf2.toString())
console.log(Buffer.isBuffer(buf2))
console.log(buf2.toString('utf8', 0,10))