# Projeto WhatsApp Clone

[![Hcode Treinamentos](https://www.hcode.com.br/res/img/hcode-200x100.png)](https://www.hcode.com.br)

Projeto desenvolvido como exemplo do Curso Completo de JavaScript na Udemy.com.

### Projeto
![WhatsApp Clone](https://firebasestorage.googleapis.com/v0/b/hcode-com-br.appspot.com/o/whatsapp.jpg?alt=media&token=5fc78e3b-4871-424f-abfa-b765f2515d0c)

### Recursos Usados

Lista de recursos usados em aula para este projeto

| Recurso | Link |
| ------ | ------ |
| Webpack | https://webpack.js.org/ |
| Firebase Authentication | https://firebase.google.com/docs/auth/?authuser=0 |
| Cloud Firestore | https://firebase.google.com/docs/firestore/?authuser=0 |
| Cloud Functions | https://firebase.google.com/docs/functions/?hl=pt-br |
| Cloud Storage | https://firebase.google.com/docs/storage/?authuser=0 |
| PDF.js | https://mozilla.github.io/pdf.js/ |
| MediaDevices.getUserMedia() | https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia |


--- ---------------------------------------------------
- bibliotecas global de sistema
--- ---------------------------------------------------
- biblioteca para o script de node se auto dar restart quando tiver uma modificacao
 npm install -g nodemon 
 
 - bliblioteca necessaria para nao precisar mais instalar bibliotecas globais no sistema, instalando somente no projeto
// e depois so chamar normal usando npx na frente "npx nodemon index.js"
  npm install --save nodemon 
  npm install --save npx

   
  
--- ---------------------------------------------------
- criado com
--- ---------------------------------------------------
npm init -y


--- ---------------------------------------------------
- bibliotecas aplicacao
--- ---------------------------------------------------

- webpack empacotador de aplicacao web
npm install --save webpack@3.1.0
npm install --save webpack-dev-server@2.5.1

--nodemon para o projeto ficar rodando 
npm install --save npx
npm install --save nodemon
npx nodemon index.js

- para rotas da aplicacao
npm install --save express

- auto loading rotas da aplicacao
npm install --save consign

- body parser para pegar a conversao em objeto de uma req post no body
npm install --save body-parser

-- banco de dados nedb - com sintaxe de objeto javascript
npm install --save nedb

-- validacao do express "express-validator": "^5.3.1",
npm install --save express-validator@5.3.1




