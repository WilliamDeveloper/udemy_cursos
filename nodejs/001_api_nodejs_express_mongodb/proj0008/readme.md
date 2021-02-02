- criar diretorio vazio
````
mkdir proj0008
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
 cd proj0008
 node app.js
 ````
 
 /*
 200  ok
 201  created
 202  accepted (aceitei sua requisicao e estou processando isso)
 
 400 bad request
 401 unauthorized (autentificacao - carater temporario)
 403 forbidden (autorizacao - carater permanente)
 */