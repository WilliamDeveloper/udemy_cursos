// explicacao muito boa de var e let

// https://www.youtube.com/watch?v=EXcj8jhZj8I

// basicamente quando se usar "VAR"

// cria uma variavel dentro de um bloco de if a variavel fica com escopo global

// quando se usar let o escopo de bloco passa a ser respeitado

///----------------------------------------------------------
if(true){
    //essa variavel vai ser tornar global , inxergam ateh fora do if
    var variavel = 'nao deveria sem acessado fora do if'
}

console.log(variavel)

///----------------------------------------------------------
if(true){
    // escopo local so o bloco de if inxerga
    let variavel2 = 'nao deveria sem acessado fora do if'
}

console.log(variavel2)

///----------------------------------------------------------
function f() {
    // escopo local so a function inxerga
    var a = 'pimba'
}

f()
console.log(a)