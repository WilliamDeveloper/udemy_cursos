// const EventEmitter = require('events');
//
// class Evento extends EventEmitter {}
//
// const meuEvento = new Evento();
//
// meuEvento.on('seguranca',(x,y)=>{
//     console.log(`Excecutando o evento 'seguranca' ${x} ${y}`)
// })
//
//
// meuEvento.emit('seguranca', 'userAdmin', 'Alterou salario', 'sasa');


import {EventEmitter}  from 'events'
// const {EventEmitter} = require('events');

class Evento extends EventEmitter {}

const meuEvento = new Evento();

//subscriper - assinante
meuEvento.on('seguranca',(x,y)=>{
    console.log(`Excecutando o evento 'seguranca' ${x} ${y}`)
})

//publisher - emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou salario', 'sasa');

//node --experimental-modules events.mjs