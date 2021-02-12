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


- express
npm install --save express

- body-parser
npm install --save body-parser





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
  
  
  
  --- ---------------------------------------------------
   - documentacao test requisicao rest file 
   --- ---------------------------------------------------
   https://marketplace.visualstudio.com/items?itemName=humao.rest-client