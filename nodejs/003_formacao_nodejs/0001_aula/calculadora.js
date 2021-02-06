function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

// da pra definir mais de uma referencia no objeto
module.exports = {soma}

// ou sendo que isso ira substituir a linha acima
module.exports = {somaa : soma, soma2 : soma, soma: soma }

// tem que setar um por um , adicionando mais variavel e nao afetando o exports ja declarado
module.exports.subtracao = subtracao