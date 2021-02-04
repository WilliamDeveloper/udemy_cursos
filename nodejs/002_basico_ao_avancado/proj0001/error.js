try{
    throw  new Error('A nao nao eh possive na minha maqina fonuncia')
}catch(e){
    console.log(`temos um problema! ${e.message}`)
}

const {EventEmitter} = require('events')
const emitter = new EventEmitter()

const validaObjeto = (a) =>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('tipo informado invalido'))
    }
}

emitter.addListener('error',(err) =>{
    console.log('Evento: '+err.message)
})

let dados = {    name:'hcode',course:'nodejs'}
dados=4
validaObjeto(dados)