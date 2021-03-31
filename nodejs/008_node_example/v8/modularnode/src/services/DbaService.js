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
    },

    async recompileAllInvalid(nomeBaseSelecionado){
        let lista = await DbaService.getListObjectInvalid(nomeBaseSelecionado)
        let sql = ''

        if(lista !== undefined && lista.length){
            let p_object_type = ''
            let p_owner = ''
            let p_object_name = ''
            let p_compile = ''

            for (let i = 0; i < lista.length ; i++) {
                console.log('lista ', lista[i])
                p_object_type = lista[i]['OBJECT_TYPE']
                p_owner = lista[i]['OWNER']
                p_object_name = lista[i]['OBJECT_NAME']
                p_compile = lista[i]['OBJECT_TYPE']

                if(p_object_type == 'PACKAGE BODY'){
                    p_object_type='PACKAGE'
                    p_compile= 'COMPILE BODY'
                }

                sql = sqlQuerys.update.COMPILAR_OBJ_OWNER
                sql = eval("`"+sql+"`")

                await KnexOracleDB.runSQL(nomeBaseSelecionado,sql)
            }

        }
    }


}

module.exports = DbaService