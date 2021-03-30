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

    'RUN_JOB_NOW' : ` 
        begin  
            dbms_scheduler.create_job(
                job_name => '{p_job_name}'
                , job_type => 'PLSQL_BLOCK'
                , enabled => TRUE
                , auto_drop => TRUE
                , job_action => q'[{p_sql}]'
            );  
        end;
    `,



}

module.exports = sql