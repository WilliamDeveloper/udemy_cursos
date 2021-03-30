const sql = {

    getValueFromKey(key){
        return this[key]
    },

    getAllSql: function () {
        let lista = []
        Object.entries(this).forEach((prop)=>{
            let chave = prop[0];
            let valor = prop[1];
            if(typeof valor !== 'function' ){
                lista.push(chave)
            }
        })
        return lista
    },

    'DBA_LISTAR_OBJETOS_INVALIDOS' : ` 
        SELECT  owner,  object_type,  object_name,  status FROM   dba_objects  WHERE  status = 'INVALID'
    `,

    'DBA_LISTAR_GRANT_OBJ' : "SELECT * FROM  DBA_TAB_PRIVS where table_name = UPPER('${p_tabela}') AND GRANTEE = UPPER('${p_owner_granted}')  ",

    'DBA_LISTAR_DADOS_TABELA':"select col.column_id,\n" +
        "            col.owner as schema_name,\n" +
        "            col.table_name,\n" +
        "            col.column_name,\n" +
        "            col.data_type,\n" +
        "            col.data_length,\n" +
        "            col.data_precision,\n" +
        "            col.data_scale,\n" +
        "            col.nullable\n" +
        "            from sys.all_tab_columns col\n" +
        "            inner join sys.all_tables t\n" +
        "            on col.owner = t.owner\n" +
        "            and col.table_name = t.table_name\n" +
        "            where lower(col.owner) = '${p_owner}'\n" +
        "            and lower(col.table_name) = '${p_nome_tabela}'\n" +
        "            order by col.column_id",



}

module.exports = sql