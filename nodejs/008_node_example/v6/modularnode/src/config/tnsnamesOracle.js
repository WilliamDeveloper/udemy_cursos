const tnsnamesOracle = {
    homologa: { nameBase:'homologa_system', host : '10.0.0.30', user:'system', password:'', database: 'hmg' },
    homologa_autorizador: { nameBase:'homologa_autorizador', host : '10.0.0.30', user:'', password:'', database: 'hmg' },
    fimmes: { nameBase:'fimmes_system', host : '10.0.0.30', user:'system', password:'', database: 'fimmes' },
    vdb01_system: { nameBase:'vdb01_system',host : '10.0.1.30', user:'system', password:'', database: 'vdb01' },
    vdb02_system: { nameBase:'vdb02_system', host : '10.0.1.30', user:'system', password:'', database: 'vdb02' },
    vdb03_system: { nameBase:'vdb03_system', host : '10.0.1.30', user:'system', password:'', database: 'vdb03' },
    vdb04_system: { nameBase:'vdb04_system',host : '10.0.1.30', user:'system', password:'', database: 'vdb04' },
    vdb05_system: { nameBase:'vdb05_system',host : '10.0.1.30', user:'system', password:'', database: 'vdb05' },
    vdb06_system: { nameBase:'vdb06_system', host : '10.0.1.30', user:'system', password:'', database: 'vdb06' },

    getListaBasesConfig: function () {
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

    getConfigByNameBase(nameBase){
        return this[nameBase]
    }

}

module.exports = tnsnamesOracle