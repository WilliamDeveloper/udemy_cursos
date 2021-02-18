const httpStatusCode = require('./msg/httpStatusCode')
const credentials = require('./authenticate/credentials')

const msg ={
    httpStatusCode,
    credentials
}

module.exports = {msg}