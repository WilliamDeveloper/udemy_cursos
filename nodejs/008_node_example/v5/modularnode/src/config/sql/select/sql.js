const sql = {
    t411pasiFull : ` 
        select cd_key, cd_value, id_sit from autorizador.t411pasi where rownum  <= 5
    `,
}