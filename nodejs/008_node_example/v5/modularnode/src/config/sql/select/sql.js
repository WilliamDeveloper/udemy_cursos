const sql = {

    getValueFromKey(key){
        return this[key]
    },

    'T411PASI_FULL' : ` 
        select cd_key, cd_value, id_sit from autorizador.t411pasi where rownum  <= 5
    `,



}