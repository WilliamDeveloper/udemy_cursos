const KnexOracleDB = require("../helpers/db/oracle/KnexOracleDB")
const tnsnamesOracle = require('../config/tnsnamesOracle')
const sqlQuerys = require("../config/sql/sqlQuerys")

const SqlController ={

    async select(req, res, next){

        console.log('req.body ', req.body)
        console.log('req.params ', req.params )

        let {sql, nomeBaseSelecionado,nomeSqlSelecionado} = req.body

        console.log('load=> ', sqlQuerys.select.T411PASI_FULL)
        console.log('load=> ', sqlQuerys.select.getAllSql())

        if(!sql) sql = "select 'blau' chave, 'pimba' valor from dual "
        if(!nomeBaseSelecionado) nomeBaseSelecionado = "homologa"
        if(!nomeSqlSelecionado) nomeSqlSelecionado = ""


        let listaNomesBase = tnsnamesOracle.getListaBasesConfig()
        let listaAllSql = sqlQuerys.select.getAllSql()
        console.log('listaAllSql', listaAllSql)

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
                nomeBaseSelecionado,
                listaNomesBase,
                listaAllSql,
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