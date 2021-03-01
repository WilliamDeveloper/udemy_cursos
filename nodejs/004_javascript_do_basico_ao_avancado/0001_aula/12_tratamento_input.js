function checarNumero(num){
    let numero = Number(num)

    if(Number.isNaN(numero)){
        console.log("por favor passe so numero para o programa")
    }else{
        return numero
    }

}

let result = checarNumero(5)
console.log(result)

result = checarNumero("huhudhsuahduash")
console.log(result)