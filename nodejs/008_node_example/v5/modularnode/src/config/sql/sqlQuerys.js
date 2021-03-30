const select_ = require('./select/sql')
const insert_ = require('./insert/sql')
const update_ = require('./update/sql')
const delete_ = require('./delete/sql')


const sqlQuerys ={
    select: select_,
    insert:insert_,
    update:update_,
    delete: delete_
}

module.exports = sqlQuerys