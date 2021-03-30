const KnexOracleDB = require("../helpers/db/oracle/KnexOracleDB")
const tnsnamesOracle = require('../config/tnsnamesOracle')

const SqlController ={

    async select(req, res, next){

        console.log('req ', req)

        let {sql, nomeBaseSelecionado} = req.body

        if(!sql) sql = "select 'blau' chave, 'pimba' valor from dual "

        let listaNomesBase = tnsnamesOracle.getListaBasesConfig()

        let nomeTabela = 'T411Pasi'

        let conexao = await KnexOracleDB.getConexao(nomeBaseSelecionado)
        let resultSql = conexao.raw(sql)

        console.log(resultSql.toQuery())

        resultSql.then(data=>{
            let nomeColunas=Object.keys(data[0])
            let qtdColunas= nomeColunas.length
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