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

bower install --save bootstrap@4.6.0
bower install --save jquery@3.6.0

# run
npx nodemon app.js
npm run start








