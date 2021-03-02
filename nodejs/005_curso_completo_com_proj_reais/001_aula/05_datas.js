let agoraInTimeStampInTimeMiles = Date.now()
console.log('agoraInTimeStamp desde 01/01/1970',agoraInTimeStampInTimeMiles, ' in milisegundos')

let dataAtual = new Date()
console.log(dataAtual)
console.log('dia: ',dataAtual.getDate())
console.log('mes: ',dataAtual.getMonth())
console.log('ano: ',dataAtual.getFullYear())


console.log('horas: ',dataAtual.getHours())
console.log('minutos: ',dataAtual.getMinutes())
console.log('segundos: ',dataAtual.getSeconds())
console.log('milisegundos: ',dataAtual.getMilliseconds())

console.log('padrao brasileiro: ',dataAtual.toLocaleDateString('pt-br'))
console.log('padrao brasileiro: ',dataAtual.toLocaleDateString('pt-BR'))

