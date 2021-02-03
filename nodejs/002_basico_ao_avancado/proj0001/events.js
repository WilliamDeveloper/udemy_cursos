const EventEmitter = require('events');

class Evento extends EventEmitter {}

const meuEvento = new Evento();

meuEvento.on('seguranca',(x,y)=>{
    console.log(`Excecutando o evento 'seguranca' ${x} ${y}`)
})


meuEvento.emit('seguranca', 'userAdmin', 'Alterou salario', 'sasa');