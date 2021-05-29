nvm install 11.11
nvm use 11.11

npm install -g typescript@3.3.3333

tsc --init

cd typescript/aula02/curso-typescript
tsc typescript/aula02/curso-typescript/introducao/basico.ts

cd typescript/aula02/curso-typescript
npm init -y

npm install --save live-server

cd typescript/aula02/curso-typescript

npm start 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "live-server"
},

cd typescript/aula02/curso-typescript
tsc -w