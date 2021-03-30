const KnexOracleDB = require("../helpers/db/oracle/KnexOracleDB")
const tnsnamesOracle = require('../config/tnsnamesOracle')

const SqlController ={

    async select(req, res, next){

        // let sql = " select * from autorizador.t411pasi  "
        // let listaNomesBase = tnsnamesOracle['0']
        // console.log(listaNomesBase)

        let nomeBase = 'homologa_autorizador'

        let configBase = tnsnamesOracle.getConfigByNameBase(nomeBase)
        console.log(configBase)

        let listaNomesBase = tnsnamesOracle.getListaBasesConfig()
        console.log('listaNomesBase',listaNomesBase)





        let nomeTabela = 'T411Pasi'
        let sql = " select cd_key, cd_value, id_sit from autorizador.t411pasi where rownum <= 2 "
        let conexao = await KnexOracleDB.getConexao(nomeBase)
        let resultSql = conexao.raw(sql)

        console.log(resultSql.toQuery())
        resultSql.then(data=>{
            let nomeColunas=Object.keys(data[0])
            let qtdColunas= Object.keys(data[0]).length
            let qtdLinhas= data.length
            console.log(data,qtdColunas , qtdLinhas)
            let sqlResult = {
                nomeColunas,
                qtdColunas,
                qtdLinhas,
                rows: data
            }
            let dadosPagina={
                listaNomesBase,
                nomeTabela,
                sqlResult
            }
            // res.json(obj);
            res.render('sql', dadosPagina)
        }).catch(err=>{
            console.log(err)
            res.send('respond with a resource');
        })


    },

    insert(req, res, next){
        res.send('respond with a resource');
    },

    delete(req, res, next){
        res.send('respond with a resource');
    },

    update(req, res, next){
        res.send('respond with a resource');
    }

}

module.exports = SqlController