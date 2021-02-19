const httpStatusCode = require('./msg/httpStatusCode')
const credentials = require('./authenticate/credentials')

const msg ={
    httpStatusCode,
}

const objModulo = {
    msg,
    credentials
}

module.exports = objModulo