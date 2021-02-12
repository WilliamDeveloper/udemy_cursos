-- dependencias basicas
````
#C:\Users\willi\AppData\Roaming\npm
#D:\_dev_\bin\nodejs

npm install -g nodemon
````


- versao do npm
````
npm -v
````
---
- criando conta no site npm "https://www.npmjs.com/login"
````
npm adduser
````

- logando/deslogando/ qual conta logada
````
npm login
npm logout
npm whoami
````

- PUBLICAR - um pacote no servidor npm - DEVE ESTAR LOGADO e na pasta de projeto node
- atualizar versao no package.json
````
npm publish
npm publish -f
````

- DESPUBLICAR(ateh72h) - um pacote no servidor npm - DEVE ESTAR LOGADO e na pasta de projeto node
````
npm unpublish canivetesuico -f
````

- descobrir o dono do pacote
````
npm owner ls
````

- passar o pacote para outra pessoa
````
npm owner add npm pacoteteste
npm owner rm danilo.filitto pacoteteste
````

- listar todos pacotes instalados em um projeto node
````
npm list
````

- instalar - uma biblioteca especifica no projeto
````
npm i readline-sync
````

- atualizar - uma biblioteca especifica no projeto
````
npm update readline-sync
````

- apost dar um git clone -> inicializar um projeto npm
````
npm init
npm init -y
````

- DEPRECATED - depreciar um pacote node
````
npm deprecated pacoteteste "Não existe pacote realmente"
````


--- ---------------------------------------------------
 - documentacao test requisicao rest file 
 --- ---------------------------------------------------
 https://marketplace.visualstudio.com/items?itemName=humao.rest-client