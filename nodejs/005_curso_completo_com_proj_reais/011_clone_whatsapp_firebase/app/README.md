/*
require(nodejs)(padrao antigo) => usa module.exports
import(es6)(padrao moderno)
*/

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

- biblioteca de pdf
npm install --save pdfjs-dist@2.0.489


- firebase
npm install --save firebase@4.13.1

- firebase - tools
npm install --save npx
npm install --save firebase-tools@3.18.4



 npx firebase login
-> permitir
-> Y
npx firebase init functions
-> Y


firebase deploy --only functions

--- ---------------------------------------------------
- rodar aplicacao
--- ---------------------------------------------------
cd 010_clone_whatsapp/app/
npm install
npm run start



 "start": "webpack-dev-server --host 0.0.0.0 --port 8989"