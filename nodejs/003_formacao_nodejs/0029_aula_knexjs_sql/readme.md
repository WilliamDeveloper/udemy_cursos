--- ---------------------------------------------------
- criado com
--- ---------------------------------------------------
npm init -y

--- ---------------------------------------------------
- bibliotecas global de sistema
--- ---------------------------------------------------
- biblioteca para o script de node se auto dar restart quando tiver uma modificacao
 npm install -g nodemon 
 
 
 
 

 --- ---------------------------------------------------
 - bibliotecas aplicacao
 --- ---------------------------------------------------
 
-- knex - http://knexjs.org/
npm install --save knex


-- dependencias possiveis
# Then add one of the following (adding a --save) flag:
$ npm install pg
$ npm install sqlite3
$ npm install mysql
$ npm install mysql2
$ npm install oracledb
$ npm install mssql



 --- ---------------------------------------------------
 - formas principais de manipular sql no nodejs
 --- ---------------------------------------------------
 - RAW(CRUA) - "select * from post" //mysql2
    - torna o codigo uma bagunça
    
 - ORM - Models -> Artigos.create({"title":"dsadsadsa"}) //sequelize 
    - pouca flexibilidade
    - nem sempre tem performance
    
 - Query builder -> http://knexjs.org/
    - banco.select().table("post").where({id:7}).orWhere({id:8}).orderBy('id') 
        -> select * from post where id =7 or id =8 order by id
    - muita flexibilidade para fazer query
    -  montar banco de dados na mao