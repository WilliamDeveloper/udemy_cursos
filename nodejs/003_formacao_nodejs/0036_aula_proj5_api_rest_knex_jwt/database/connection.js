var knex = require('knex')({
    client: 'mysql2',
    connection: {
      // host : '127.0.0.1',
      host : '192.168.8.14',
      user : 'root',
      password : '123456',
      database : 'apiusers'
    }
  });

module.exports = knex