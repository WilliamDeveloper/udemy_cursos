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

- express
npm install --save express

- body-parser
npm install --save body-parser

- express-session
npm install --save express-session

// "ejs": "^2.7.1",
- EJS - embedded javascript templating -  motor de html - template engine
npm install --save ejs@2.7.1

- express-session - messagem que eh apagada assim q eh recuperada pela rota
npm install --save express-flash


- cookie-parser
npm install --save cookie-parser


--https://www.npmjs.com/package/validator


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