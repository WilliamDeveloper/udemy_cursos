const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '192.168.8.14',
    user : 'root',
    password:'123456',
    database:'saboroso'
})