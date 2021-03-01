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
console.log('nao formado apenas por digito ? ',sentenca.test("jhdsjahdjahjjhdhadhag"))
console.log('nao formado apenas por digito ? ',sentenca.test("11111111"))
console.log('nao formado apenas por digito ? ',sentenca.test("11111111dsadsadsa"))


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

sentenca = new RegExp("\\S")
sentenca = /\S/
console.log("NAO POSSUI espaco em branco ? ",sentenca.test("wwwdsadsa asdasdsa"))
console.log("NAO POSSUI espaco em branco ? ",sentenca.test("wwwdsadsaasdasdsa"))

// .  caracter coringa
sentenca = /./
sentenca = new RegExp(".")
console.log("POSSUI QUALQUER COISA ESCRITA ? ",sentenca.test("wwwdsadsa asdasdsa"))


sentenca=/\d\d\d\d/
console.log('ano possui 4 digitos  no minimo ? ', sentenca.test('20199'))
console.log('ano possui 4 digitos  no minimo ? ', sentenca.test('2019'))
console.log('ano possui 4 digitos  no minimo ? ', sentenca.test('19'))


sentenca=/\w\w\w/
console.log('palavra tem no minimo 3 letras ? ', sentenca.test('2019'))
console.log('palavra tem no minimo 3 letras ? ', sentenca.test('201'))
console.log('palavra tem no minimo 3 letras ? ', sentenca.test('19'))


//--------------------------------
// ^  - negacao
//--------------------------------
sentenca =/[^abc]/

console.log('contem abc ?', sentenca.test('djuhsjdhasjdhsajhdjasabchdsjudsjahdjas'))
console.log('contem abc ?', sentenca.test('djuhsjdhasjdhsajhdjaggas'))
console.log('contem abc ?', sentenca.test('djuhsjdhasjdhsajhdjasad'))
console.log('contem abc ?', sentenca.test('ddddd'))


//--------------------------------
// +(plus) - repeticao
//--------------------------------

sentenca =/\d+/

console.log('tem digito ?', sentenca.test('djuhsjdhasjdhsajhdjasabchdsjudsjahdjas'))
console.log('tem digito ?', sentenca.test('djuhsjdhasjdhsajhdjasabchdsjudsjahdjas1121'))

//--------------------------------
// ? - opcional
//--------------------------------
sentenca =/Prova\s?\d?/

console.log('prova ?', sentenca.test('Prova'))
console.log('prova ?', sentenca.test('Prova 4444'))
console.log('prova ?', sentenca.test('Prova mmm'))
console.log('prova ?', sentenca.test('Provammm'))
console.log('prova ?', sentenca.test('Provvmmm'))

//--------------------------------
// {} - ocorrencia
//--------------------------------
sentenca = /\d{3]/

console.log('ocorrencia ?', sentenca.test('12'))
console.log('ocorrencia ?', sentenca.test('123'))
console.log('ocorrencia ?', sentenca.exec('1234'))
console.log('ocorrencia ?', sentenca.test('Prova 4444'))
console.log('ocorrencia ?', sentenca.test('Prova mmm'))
console.log('ocorrencia ?', sentenca.test('Provammm'))
console.log('ocorrencia ?', sentenca.test('Provvmmm'))

//--------------------------------
// match - dentro de uma string
//--------------------------------
console.log('1111111'.match(/\d+/))

//--------------------------------
// || - operador OR(ou)
//--------------------------------
sentenca = /\d+ (banana|maca|laranja)/
console.log('operador OR(ou) ?', sentenca.test('banana'))
console.log('operador OR(ou) ?', sentenca.test('12 banana'))
console.log('operador OR(ou) ?', sentenca.test('maca'))



sentenca = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/
console.log('data ?', sentenca.test('banana'))
console.log('data ?', sentenca.test('12 banana'))
console.log('data ?', sentenca.test('maca'))
console.log('data ?', sentenca.test('20'))
console.log('data ?', sentenca.test('202'))
console.log('data ?', sentenca.test('2021'))
console.log('data ?', sentenca.test('01/02/202'))
console.log('data ?', sentenca.test('01/02/2021'))

