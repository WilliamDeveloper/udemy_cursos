--- ---------------------------------------
- bibliotecas npm
--- ---------------------------------------
````
#criar um projeto com ejs pelo express-generator
npm install -g express-generator
express --ejs modularnode

#alias de import
#npm install --save module-alias

#variaveis de ambiente
# https://www.npmjs.com/package/module-alias

npm install --save dotenv

#npx
npm install --save npx


#nodemon
npm install --save nodemon


# resolver dependencias
npm install

# hbs view engine
npm install --save hbs
npm install --save express-hbs

# usando banco oracle
npm install --save knex
npm install --save oracledb

npm install --save handlebars-helpers

# selenium
npm install --save selenium-webdriver

````

--- ---------------------------------------
- bibliotecas bower
--- ---------------------------------------
````
cd /modularnode/public/
bower init

bower install --save jquery@3.6.0
bower install --save popper.js@1.12.9
bower install --save bootstrap@4.6.0

bower install --save font-awesome@5.15.3
````


--- ---------------------------------------------
--- PARA RODAR APOS FAZER CHECKOUT PARA MAQUINA
--- ---------------------------------------------
--- ---------------------------------------
- resolvendo dependencias do projeto
--- ---------------------------------------
#dependencias frontend
````
cd /modularnode/public/
bower install
````

#dependencias backend
````
cd /modularnode/
npm install
````

--- ---------------------------------------
- Configuracoes projeto
--- ---------------------------------------
- /modularnode/src/config
- /modularnode/src/config/.development.env
- /modularnode/src/config/.production.env
- /modularnode/package.json

--- ---------------------------------------
- Rodando projeto
--- ---------------------------------------
````
npm run start
npm run start_dev
npm run start_prod
````







