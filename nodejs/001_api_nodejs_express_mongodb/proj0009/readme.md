- criar diretorio vazio
````
mkdir proj0009
````

- inicializar projeto node
 ````
 npm init
 ````
 
 - bibliotecas de api
 ````
 npm install express --save
 npm install mongoose --save
 npm install body-parser --save
 npm install bcrypt --save
 npm install jsonwebtoken --save
 ````
 
 - instalar dependencias do projeto
 ````
 npm install
 ````
 
 - subir aplicacao
 ````
 cd proj0009
 node app.js
 
set NODE_ENV=prod
node app.js
 
set NODE_ENV=dev
node app.js
 
set NODE_ENV=hml
node app.js
 ````
 
 
 /*
 STATUS CODE PRINCIPAIS
 
 200  ok
 201  created
 202  accepted (aceitei sua requisicao e estou processando isso)
 
 400 bad request
 401 unauthorized (autentificacao - carater temporario)
 403 forbidden (autorizacao - carater permanente)
 404 not found
 
 500 internal error (erro na api)
 501 not implemented - a api nao suporta essa funcionalidade
 503 service unavailable - api excecuta essa operacao mas no momento esta indisponivel
 
 
 
 
 
 */