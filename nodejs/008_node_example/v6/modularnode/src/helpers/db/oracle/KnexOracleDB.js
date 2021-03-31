// process.env['TNS_ADMIN'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5/network//admin'
// process.env['ORACLE_HOME'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5'
// process.env['LD_LIBRARY_PATH'] = 'D:/_dev_/_ide_/plsql/plsql11_64bits/instantclient-x64-19.5'
// process.env['PATH'] =`${process.env['ORACLE_HOME']};${process.env['PATH']}`

process.env['TNS_ADMIN'] = `${process.env['ORACLE_HOME']}/network/admin`
process.env['ORACLE_HOME'] = `${process.env['ORACLE_HOME']}`
process.env['LD_LIBRARY_PATH'] = `${process.env['ORACLE_HOME']}`
process.env['PATH'] =`${process.env['ORACLE_HOME']};${process.env['PATH']}`


const tnsnamesOracle = require('../../../config/tnsnamesOracle')
const knex = require('knex')

const KnexOracleDB = {
    async getConexao(nomeBase){
        let config = {
            client: 'oracledb',
            connection: tnsnamesOracle[nomeBase],
            fetchAsString: [ 'number', 'clob' ]
        }
        console.log('config', config)
        return await knex(config);
    },

    async runSQL(nomeBaseSelecionado, sql){
        let retorno = []
        try{
            let conexao = await KnexOracleDB.getConexao(nomeBaseSelecionado)
            let resultSql = await conexao.raw(sql)
            retorno = resultSql
        }catch (e) {
            console.log('error-runSQL: ', e)
            retorno = undefined
        }
        return retorno
    }
}


module.exports = KnexOracleDB