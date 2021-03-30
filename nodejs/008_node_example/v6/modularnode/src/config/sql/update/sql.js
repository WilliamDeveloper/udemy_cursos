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

    'DATA_PROC_PRA_HOJE' : ` 
        begin
            UPDATE t416proc proc
            SET proc.dt_ult_pro=trunc(sysdate-1), proc.dt_pro_atu=trunc(sysdate);
            commit;
        end;
    `,

    'BIOMETRIA_WSDL':`
        begin
        update autorizador.t411wsdl
        set end_wsdl = 'https://demo.creddefense.com/index.php/api/v2',
            cd_usu = 'VERDECARD_API',
            nr_ip= utl_inaddr.get_host_address(NULL),
            de_snh_crp = '721FCFFEA6E38F785EEF39AB503B1219'
        where (nr_ip= utl_inaddr.get_host_address(NULL) or nr_ip = '10.0.0.196' or nr_ip= '10.0.0.30')
        and id_tp = 'CREDDEFENSE';
        commit;
        end;
    `,

    'BIOMETRIA_WSDL':`
        begin
            UPDATE autorizador.tbl_config_url_barramento_h SET api_url='http://10.0.0.85:5787/PasswordManager_REST/passwordControl/' where api_number >= 1;
            commit;
        end;
    `,

    'ACESSO_EXTERNO':`
        begin
            UPDATE autorizador.t411defg SET id_ace_ext='N';
            commit;
        end;
    `,

    'SENHA_RESET_01VSYS':`
        begin  
            dbms_scheduler.create_job(
                job_name => 'JOB_SENHA_RESET_01VSYS'
                , job_type => 'PLSQL_BLOCK'
                , enabled => TRUE
                , auto_drop => TRUE
                , job_action => q'[begin   UPDATE t400usua usua    SET id_st = 'A', DE_SNH_USU = '518', nro_ten_ace = 0, dt_vld_snh =  (sysdate+(5*365))  WHERE 1=1; COMMIT;  end;]'
            );  
        end;        
    `,

    'SENHA_RESET_02DIGI':`        
        begin  
            dbms_scheduler.create_job(
                job_name => 'JOB_SENHA_RESET_02DIGI'
                , job_type => 'PLSQL_BLOCK'
                , enabled => TRUE
                , auto_drop => TRUE
                , job_action => q'[begin   UPDATE digitaliza.usuario SET SENHA='518' , criptografia = 'ESPECIAL_1', situacao = 'ATIVO'   WHERE 1=1; COMMIT;  end;]'
            );  
        end;
    `,

    'SENHA_RESET_03VCOB':`        
        begin  
            dbms_scheduler.create_job(
                job_name => 'JOB_SENHA_RESET_03VCOB'
                , job_type => 'PLSQL_BLOCK'
                , enabled => TRUE
                , auto_drop => TRUE
                , job_action => q'[begin   UPDATE digitaliza.usuario SET SENHA='518' , criptografia = 'ESPECIAL_1', situacao = 'ATIVO'   WHERE 1=1; COMMIT;  end;]'
            );  
        end;
    `,

    'DESATIVAR_ACESSO_EXT':`
        begin
            UPDATE  autorizador.t411defg SET id_ace_ext='N';
            commit;
        end;
    `,



}

module.exports = sql