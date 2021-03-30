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

    'T411PASI_FULL' : ` 
        select cd_key, cd_value, id_sit from autorizador.t411pasi
    `,

    'T411PALO_FULL' : ` 
        select * from autorizador.t411palo where rownum  <= 5
    `,

    'T411DEFG_FULL' : ` 
        select * from autorizador.t411defg
    `,

    'T411PROC_FULL' : ` 
        select * from autorizador.t411proc
    `,



}

module.exports = sql