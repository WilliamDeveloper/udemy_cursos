const KnexOracleDB = require("../helpers/db/oracle/KnexOracleDB")
const tnsnamesOracle = require('../config/tnsnamesOracle')
const sqlQuerys = require("../config/sql/sqlQuerys")
const DbaService = require("../services/DbaService")

const SqlController = {

    async select(req, res, next) {

        console.log('req.body ', req.body)
        console.log('req.params ', req.params)

        let endpointForm = '/sql/select'
        let {sql, nomeBaseSelecionado, nomeSqlSelecionado} = req.body

        let listaNomesBase = tnsnamesOracle.getListaBasesConfig()
        let nomeTabela = '<- Select ->'//'T411Pasi'
        let listaAllSql = sqlQuerys.select.getAllSql()
        let listaAllSqlDba = sqlQuerys.dba.getAllSql()
        listaAllSql = [].concat(listaAllSql, listaAllSqlDba)

        if (!nomeBaseSelecionado) nomeBaseSelecionado = "homologa"
        if (!nomeSqlSelecionado) nomeSqlSelecionado = 'T411PASI_FULL'
        if (!sql) sql = 'select 1 chave, 2 valor from dual'

        if (req.method == 'GET') {
            let dadosPagina = {
                endpointForm,
                nomeBaseSelecionado: '',
                nomeSqlSelecionado: '',
                listaNomesBase,
                listaAllSql,
                nomeTabela: nomeTabela,
                sqlResult: []
            }
            // res.json(obj);
            res.render('sql', dadosPagina)
            return
        }
        else
        {
            sql = sqlQuerys.select.getValueFromKey(nomeSqlSelecionado)
            if (!sql) {
                sql = sqlQuerys.dba.getValueFromKey(nomeSqlSelecionado)
                if (!sql) {
                    console.log('sql nao encontrado')
                    return
                }
            }
        }


        try {

            let lista = await KnexOracleDB.runSQL(nomeBaseSelecionado, sql)

            if (lista === undefined || !lista.length ) {

                console.log('array vazio')

                let dadosPagina = {
                    endpointForm,
                    nomeBaseSelecionado: '',
                    nomeSqlSelecionado: '',
                    listaNomesBase,
                    listaAllSql,
                    nomeTabela: nomeTabela,
                    sqlResult: []
                }

                res.render('sql', dadosPagina)
            }
            else
            {
                let dadosPagina = {
                    endpointForm,
                    nomeBaseSelecionado,
                    nomeSqlSelecionado,
                    listaNomesBase,
                    listaAllSql,
                    nomeTabela,
                    sqlResult:{
                        nomeColunas:Object.keys(lista[0]),
                        qtdColunas:Object.keys(lista[0]).length,
                        qtdLinhas:lista.length,
                        rows: lista
                    }
                }
                // res.json(obj);
                res.render('sql', dadosPagina)
            }

        } catch (e) {
            console.log('error:', e)
        }


    },

    insert(req, res, next) {
        res.send('respond with a resource');
    },

    delete(req, res, next) {
        res.send('respond with a resource');
    },

    async update(req, res, next) {
        console.log('metodo', req.method)
        console.log('req.body ', req.body)
        console.log('req.params ', req.params)

        let endpointForm = '/sql/update'
        let {sql, nomeBaseSelecionado, nomeSqlSelecionado} = req.body
        let listaNomesBase = tnsnamesOracle.getListaBasesConfig()
        let listaAllSql = sqlQuerys.update.getAllSql()
        let nomeTabela = '<- Update ->'//'T411Pasi'
        // console.log('listaAllSql', listaAllSql)

        if (!nomeBaseSelecionado) nomeBaseSelecionado = "homologa"
        if (!nomeSqlSelecionado) nomeSqlSelecionado = 'T411PASI_FULL'
        if (!sql) sql = 'select 1 chave, 2 valor from dual'


        if (req.method == 'GET') {
            let dadosPagina = {
                endpointForm,
                nomeBaseSelecionado: '',
                nomeSqlSelecionado: '',
                listaNomesBase,
                listaAllSql,
                nomeTabela: nomeTabela,
                sqlResult: []
            }
            // res.json(obj);
            res.render('sql', dadosPagina)
        }
        else
        {
            sql = sqlQuerys.update.getValueFromKey(nomeSqlSelecionado)

            if (nomeSqlSelecionado === 'COMPILAR_OBJ_OWNER') {

                let lista = await DbaService.getListObjectInvalid(nomeBaseSelecionado)
                // console.log('lista-blau- ', lista)

                if (lista === undefined || !lista.length) {
                    // console.log('array vazio',lista)

                    let dadosPagina = {
                        endpointForm,
                        nomeBaseSelecionado: '',
                        nomeSqlSelecionado: '',
                        listaNomesBase,
                        listaAllSql,
                        nomeTabela: nomeTabela,
                        sqlResult: []
                    }
                    // res.json(obj);
                    res.render('sql', dadosPagina)

                }
                else
                {
                    await DbaService.recompileAllInvalid(nomeBaseSelecionado)
                    lista = await DbaService.getListObjectInvalid(nomeBaseSelecionado)

                    let dadosPagina = {
                        endpointForm,
                        nomeBaseSelecionado,
                        nomeSqlSelecionado,
                        listaNomesBase,
                        listaAllSql,
                        nomeTabela,
                        sqlResult :{
                            nomeColunas: Object.keys(lista[0]),
                            qtdColunas: Object.keys(lista[0]).length,
                            qtdLinhas: lista.length,
                            rows: lista
                        }
                    }

                    res.render('sql', dadosPagina)

                }
            }
            else
            {

                try {

                    let resultSql = await KnexOracleDB.runSQL(nomeBaseSelecionado, sql)

                    if (resultSql === undefined || !resultSql.length ) {

                        console.log('array vazio')

                        let dadosPagina = {
                            endpointForm,
                            nomeBaseSelecionado: '',
                            nomeSqlSelecionado: '',
                            listaNomesBase,
                            listaAllSql,
                            nomeTabela: nomeTabela,
                            sqlResult: []
                        }

                        res.render('sql', dadosPagina)
                    }
                    else
                    {
                       res.json({error:'update nao costuma vir valor '})
                    }

                } catch (e) {
                    console.log('error:', e)
                }
            }

        }

    }
}

module.exports = SqlController