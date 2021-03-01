let reg1 = new RegExp("test")
//ou
let reg2 = /test/


console.log(reg1.test("hdsjadhasjtestjdashjdsah"))
console.log(reg1.test("sdadasdsadsadsa"))


let sentenca;
//-------------------------------
// conjunto de caracteres
//-------------------------------

//ver se a string possui algum desses numeros
sentenca = new RegExp("[12345]")
console.log(sentenca.test("jhdsjahdjah6jjhdhadhag"))
console.log(sentenca.test("jhdsjahdjah35jjhdhadhag"))

//ver se a string possui algum desses numeros de 0 a 9
sentenca = new RegExp("[0-9]")
console.log(sentenca.test("jhdsjahdjah12345jjhdhadhag"))
