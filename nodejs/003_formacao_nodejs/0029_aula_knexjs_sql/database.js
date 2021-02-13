process.env['TNS_ADMIN'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5/network//admin'
process.env['ORACLE_HOME'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5'
process.env['LD_LIBRARY_PATH'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5'
process.env['PATH'] =`${process.env['ORACLE_HOME']};${process.env['PATH']}`

const knex = require('knex')({
    client: 'oracledb',
    connection: {
        host: '10.0.0.30',
        user: 'autorizador',
        password: 'holdback',
        database: 'hmg',
    },
    fetchAsString: [ 'number', 'clob' ]
});



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