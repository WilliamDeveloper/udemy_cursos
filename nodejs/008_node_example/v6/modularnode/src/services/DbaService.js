const KnexOracleDB = require("../helpers/db/oracle/KnexOracleDB")
const sqlQuerys = require("../config/sql/sqlQuerys")

const DbaService = {
    async getListObjectInvalid(nomeBaseSelecionado){
        let lista =[]

        try{
            let resultSql = await KnexOracleDB.runSQL(nomeBaseSelecionado,sqlQuerys.dba.DBA_LISTAR_OBJETOS_INVALIDOS)
            lista = resultSql
        }catch (e) {
            console.log('error-getListObjectInvalid: ',e)
        }
        return lista
    }
}

module.exports = DbaService