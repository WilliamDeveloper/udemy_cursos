let sentenca;
//-------------------------------
// termo exato
//-------------------------------

sentenca = new RegExp("test")
console.log(sentenca.test("hdsjadhasjtestjdashjdsah"))

//ou
sentenca = /test/
console.log(sentenca.test("sdadasdsadsadsa"))



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

//-------------------------------
// caracteres especiais
//-------------------------------

sentenca = /\d/
sentenca = new RegExp("\\d")
console.log('contem digitos ? ',sentenca.test("jhdsjahdjah12345jjhdhadhag"))
console.log('contem digitos ? ',sentenca.test("asd"))
console.log('contem digitos ? ',sentenca.test(" "))
console.log('contem digitos ? ',sentenca.test("123"))
console.log('contem digitos ? ',sentenca.test("123asd"))


sentenca = /\D/
sentenca = new RegExp("\\D")
console.log('nao possui numero ? ',sentenca.test("jhdsjahdjahjjhdhadhag"))
console.log('nao possui numero ? ',sentenca.test("11111111"))
console.log('nao possui numero ? ',sentenca.test("11111111dsadsadsa"))


sentenca = /\w/
sentenca = new RegExp("\\w")
console.log('contem letra ou numero ? ',sentenca.test("wwwdsadsa"))
console.log('contem letra ou numero ? ',sentenca.test("wwwdsadsa21312"))
console.log('contem letra ou numero ? ',sentenca.test("wwwdsadsa sdadsa"))
console.log('contem letra ou numero ? ',sentenca.test("dwwwdsadsa21312"))

sentenca = /\W/
sentenca = new RegExp("\\W")
console.log('nao possui letra ? ',sentenca.test("wwwdsadsa4"))
console.log('nao possui letra ? ',sentenca.test("dadadsadsadsa"))
console.log('nao possui letra ? ',sentenca.test("43434344"))

sentenca = /\s/
sentenca = new RegExp("\\s")
console.log("possui algum espaco em branco ? ",sentenca.test("wwwdsadsa asdasdsa"))

sentenca = /\S/
sentenca = new RegExp("\\S")
console.log("NAO POSSUI espaco em branco ? ",sentenca.test("wwwdsadsa asdasdsa"))
console.log("NAO POSSUI espaco em branco ? ",sentenca.test("wwwdsadsaasdasdsa"))

// caracter coringa
sentenca = /./
sentenca = new RegExp(".")
console.log("POSSUI QUALQUER COISA ESCRITA ? ",sentenca.test("wwwdsadsa asdasdsa"))

