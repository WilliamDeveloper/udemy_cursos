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

// contem digitos ?
sentenca = new RegExp("\d")
console.log('contem digitos ? ',sentenca.test("jhdsjahdjah12345jjhdhadhag"))

//contem so letra ?
sentenca = new RegExp("\w")
console.log('contem so letra ? ',sentenca.test("wwwdsadsa"))

//possui algum espaco em branco ?
sentenca = new RegExp("\s")
console.log("possui algum espaco em branco ? ",sentenca.test("wwwdsadsa asdasdsa"))