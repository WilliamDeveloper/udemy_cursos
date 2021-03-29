--- ---------------------------------------
- bibliotecas npm
--- ---------------------------------------
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



--- ---------------------------------------
- bibliotecas bower
--- ---------------------------------------
cd /modularnode/public/
bower init

bower install --save jquery@3.6.0
bower install --save popper.js@1.12.9
bower install --save bootstrap@4.6.0

bower install --save font-awesome@5.15.3

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
- Rodando projeto
--- ---------------------------------------
````
npm run start
npm run start_dev
npm run start_prod
````








