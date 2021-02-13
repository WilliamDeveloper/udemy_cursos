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