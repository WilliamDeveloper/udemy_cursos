const bat = {

    getValueFromKey(key){
        return this[key]
    },

    getAll: function () {
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

    'DEL_ALL_TEMP_BY_CURRENT_FOLDER_1' : `for /d %G in ("*.tmp") do ( rd /s /q "%~G" )`,
    'DEL_ALL_TEMP_BY_CURRENT_FOLDER_2' : `for /d %G in ("tmp*") do  ( rd /s /q "%~G" )`,
    'DEL_ALL_TEMP_BY_CURRENT_FOLDER_3' : `del /s /f /q %temp%\\*.*`,


    'DEL_ALL_FIREFOX_PROFILE_TMP_1' : `cd %temp%`,
    'DEL_ALL_FIREFOX_PROFILE_TMP_2' : `for /d %G in ("rust_mozprofile*") do (  echo "%~G" )`,
    'DEL_ALL_FIREFOX_PROFILE_TMP_3' : `for /d %G in ("rust_mozprofile*") do (  rd /s /q "%~G" )`,



}

module.exports = bat