const jwt = require('./token/jwt')
const bcrypt = require('./hash/bcrypt')



const objModulo = {
    token: jwt,
    hash: bcrypt
}

module.exports = objModulo