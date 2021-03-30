const select_ = require('./select/sql')
const insert_ = require('./insert/sql')
const update_ = require('./update/sql')
const delete_ = require('./delete/sql')

const job_ = require('./job/sql')
const dba_ = require('./dba/sql')


const sqlQuerys ={
    select: select_,
    insert:insert_,
    update:update_,
    delete: delete_,
    job:job_,
    dba: dba_

}

module.exports = sqlQuerys