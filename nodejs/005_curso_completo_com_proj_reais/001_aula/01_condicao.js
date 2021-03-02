let  cor = 'azul'

if(cor === 'verde'){
    console.log('acertou')
}else if(cor === 'amarelo'){
    console.log('acertou')
}else{
    console.log('errou')
}

//------------------

switch (cor) {
    case "verde":
        console.log('acertou')
        break;
    case "amarelo":
        console.log('acertou')
        break;
    default:
        console.log('errou')
}