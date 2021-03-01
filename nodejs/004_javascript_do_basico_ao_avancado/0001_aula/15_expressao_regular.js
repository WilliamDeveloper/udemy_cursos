let reg1 = new RegExp("test")
//ou
let reg2 = /test/


console.log(reg1.test("hdsjadhasjtestjdashjdsah"))
console.log(reg1.test("sdadasdsadsadsa"))


let sentenca
// conjunto de caracteres

sentenca = new RegExp("[12345]")
console.log(sentenca.test("jhdsjahdjah12345jjhdhadhag"))
