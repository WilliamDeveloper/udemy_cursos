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
        select cd_key, cd_value, id_sit from autorizador.t411pasi where rownum  <= 5
    `,



}

module.exports = sql