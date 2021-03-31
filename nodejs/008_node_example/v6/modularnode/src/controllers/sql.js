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


        if (!nomeBaseSelecionado) nomeBaseSelecionado = "homologa"
        if (!nomeSqlSelecionado) nomeSqlSelecionado = 'T411PASI_FULL'
        if (!sql) sql = 'select 1 chave, 2 valor from dual'

        if (req.method == 'POST') {
            sql = sqlQuerys.select.getValueFromKey(nomeSqlSelecionado)
            if (!sql) {
                sql = sqlQuerys.dba.getValueFromKey(nomeSqlSelecionado)
                if (!sql) {
                    console.log('sql nao encontrado')
                    return
                }
            }
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

        resultSql.then(data => {

            if (req.method == 'POST' && !data.length) {
                console.log('data=>', data)
                res.json(data)
                return
            }

            let nomeColunas = Object.keys(data[0])
            let qtdColunas = nomeColunas.length
            let qtdLinhas = data.length

            console.log(data, qtdColunas, qtdLinhas)

            let sqlResult = {
                nomeColunas,
                qtdColunas,
                qtdLinhas,
                rows: data
            }
            let dadosPagina = {
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
        }).catch(err => {
            console.log(err)
            res.send('respond with a resource');
        })


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
        console.log('listaAllSql', listaAllSql)

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
                console.log('lista-blau- ', lista)

                if (lista === undefined || !lista.length) {
                    console.log('array vazio',lista)

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


                    let p_object_type = ''
                    let p_owner = ''
                    let p_object_name = ''
                    let p_compile = ''


                    for (let i = 0; i < lista.length ; i++) {
                        console.log('lista ', lista[i])
                         p_object_type = lista[i]['OBJECT_TYPE']
                         p_owner = lista[i]['OWNER']
                         p_object_name = lista[i]['OBJECT_NAME']
                         p_compile = lista[i]['OBJECT_TYPE']

                         if(p_object_type == 'PACKAGE BODY'){
                             p_object_type='PACKAGE'
                             p_compile= 'COMPILE BODY'
                         }

                        sql = sqlQuerys.update.COMPILAR_OBJ_OWNER
                        sql = eval("`"+sql+"`")
                        console.log('p_object_type ', p_object_type,p_owner, p_object_name, p_compile)
                        await KnexOracleDB.runSQL(nomeBaseSelecionado,sql)
                    }

                    res.json({lista, sql})
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
                        // res.json(obj);
                        res.render('sql', dadosPagina)
                    }
                    else
                    {

                        // console.log(resultSql.toQuery())
                        console.log('c', resultSql)
                        resultSql.then(data => {

                            console.log('data=>', data)
                            res.json(data)
                            return


                        }).catch(err => {
                            console.log(err)
                            res.send('respond with a resource');
                        })


                    }


                } catch (e) {
                    console.log('error:', e)
                }
            }

        }

    }
}

module.exports = SqlController