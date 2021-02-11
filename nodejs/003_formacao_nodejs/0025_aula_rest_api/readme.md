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

// "ejs": "^2.7.1",
- EJS - embedded javascript templating -  motor de html - template engine
npm install --save ejs@2.7.1

npm install --save html-pdf



 --- ---------------------------------------------------
 - verbos http
 --- ---------------------------------------------------
 GET - PEGAR ITEM - /rota/pedido/{id}
 POST - CRIAR ITENS /rota/pedido
 PUT - EDITAR COMPLETAMENTE - /rota/pedido/{id}
 PATCH - EDITAR PARCIALMENTE - /rota/pedido/{id}
 DELETE - DELETAR COISAS  - /rota/pedido/{id}
 
  --- ---------------------------------------------------
  - status code
  --- ---------------------------------------------------
  