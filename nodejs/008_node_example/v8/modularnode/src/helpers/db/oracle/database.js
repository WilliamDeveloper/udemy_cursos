process.env['TNS_ADMIN'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5/network//admin'
process.env['ORACLE_HOME'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5'
process.env['LD_LIBRARY_PATH'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5'
process.env['PATH'] =`${process.env['ORACLE_HOME']};${process.env['PATH']}`

const oracle_conexao = {
    homologa: { host : '10.0.0.30', user:'system', password:'', database: 'hmg' },
    homologa_autorizador: { host : '10.0.0.30', user:'autorizador', password:'', database: 'hmg' },
    fimmes: { host : '10.0.0.30', user:'system', password:'', database: 'fimmes' },
    vdb01: { host : '10.0.1.30', user:'system', password:'', database: 'vdb01' },
    vdb02: { host : '10.0.1.30', user:'system', password:'', database: 'vdb02' },
    vdb03: { host : '10.0.1.30', user:'system', password:'', database: 'vdb03' },
    vdb04: { host : '10.0.1.30', user:'system', password:'', database: 'vdb04' },
    vdb05: { host : '10.0.1.30', user:'system', password:'', database: 'vdb05' },
    vdb06: { host : '10.0.1.30', user:'system', password:'', database: 'vdb06' },

}
const knex = require('knex')({
    client: 'oracledb',
    connection: oracle_conexao.homologa_autorizador,
    fetchAsString: [ 'number', 'clob' ]
});

// const knex = require('knex')({
//     client: 'oracledb',
//     connection: {
//         host: '10.0.0.30',
//         // host:'',
//         user: 'autorizador',
//         password: '',
//         // database: 'VDB01',
//         database: 'hmg',
//     },
//     fetchAsString: [ 'number', 'clob' ]
// });



// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host : '127.0.0.1',
//         user : 'root',
//         password : '123456',
//         database : 'myapp_test'
//     }
// });

module.exports = knex