const KnexOracleDB = require("../helpers/db/oracle/KnexOracleDB")
const tnsnamesOracle = require('../config/tnsnamesOracle')
const sqlQuerys = require("../config/sql/sqlQuerys")

const SqlController ={

    async select(req, res, next){

        console.log('req.body ', req.body)
        console.log('req.params ', req.params )

        let endpointForm = '/sql/select'
        let {sql, nomeBaseSelecionado,nomeSqlSelecionado} = req.body


        if(!nomeBaseSelecionado) nomeBaseSelecionado = "homologa"
        if(!nomeSqlSelecionado) nomeSqlSelecionado = 'T411PASI_FULL'
        if(!sql) sql = 'select 1 chave, 2 valor from dual'

        if(req.method == 'POST'){
            sql = sqlQuerys.select.getValueFromKey(nomeSqlSelecionado)
        }


        let listaNomesBase = tnsnamesOracle.getListaBasesConfig()

        let listaAllSql = sqlQuerys.select.getAllSql()
        let listaAllSqlDba = sqlQuerys.dba.getAllSql()
        listaAllSql = [].concat(listaAllSql, listaAllSqlDba)

        console.log('listaAllSql', listaAllSql)

        let nomeTabela = '<- Select ->'//'T411Pasi'

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
                endpointForm,
                nomeBaseSelecionado,
                nomeSqlSelecionado,
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

    async update(req, res, next){

        console.log('req.body ', req.body)
        console.log('req.params ', req.params )

        let endpointForm = '/sql/update'
        let {sql, nomeBaseSelecionado,nomeSqlSelecionado} = req.body

        if(!nomeBaseSelecionado) nomeBaseSelecionado = "homologa"
        if(!nomeSqlSelecionado) nomeSqlSelecionado = 'T411PASI_FULL'
        if(!sql) sql = 'select 1 chave, 2 valor from dual'

        if(req.method == 'POST'){
            sql = sqlQuerys.update.getValueFromKey(nomeSqlSelecionado)
        }

        let listaNomesBase = tnsnamesOracle.getListaBasesConfig()
        let listaAllSql = sqlQuerys.update.getAllSql()
        console.log('listaAllSql', listaAllSql)

        let nomeTabela = '<- Update ->'//'T411Pasi'

        let conexao = await KnexOracleDB.getConexao(nomeBaseSelecionado)
        let resultSql = conexao.raw(sql)

        console.log(resultSql.toQuery())

        resultSql.then(data=>{

            if(req.method == 'POST') {
                console.log('data=>', data)
                res.json(data)
                return
            }

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
                endpointForm,
                nomeBaseSelecionado,
                nomeSqlSelecionado,
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
    }

}

module.exports = SqlController