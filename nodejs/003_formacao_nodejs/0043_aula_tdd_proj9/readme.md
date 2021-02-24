--- ---------------------------------------------------
- bibliotecas global de sistema
--- ---------------------------------------------------
- biblioteca para o script de node se auto dar restart quando tiver uma modificacao
 npm install -g nodemon 
  
  
--- ---------------------------------------------------
- criado com
--- ---------------------------------------------------
npm init -y


--- ---------------------------------------------------
- bibliotecas aplicacao
--- ---------------------------------------------------

--nodemon para o projeto ficar rodando 
npm install --save nodemon

- framework de testes
npm install --save jest

--definicao de tipos do jest
npm install --save @types/jest

-- ferramenta auxiliar de teste de requisicao
npm install --save supertest

- para rotas da aplicacao
npm install --save express


--- ---------------------------------------------------
- teste
--- ---------------------------------------------------
test("deve fazer algo quando receber y",()=>{

})

test("deve cadastrar um usuario quando receber um e-mail x",()=>{

})

test("deve recusar o cadastro de usuario quando receber um email ja cadastrado",()=>{

})

it("should do something",()=>{

})