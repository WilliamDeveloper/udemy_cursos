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
 - build
 --- ---------------------------------------------------
- build de producao - vai gerar build na "routerguia/dist"
npm run build



 --- ---------------------------------------------------
 - bibliotecas aplicacao
 --- ---------------------------------------------------


- para rotas da aplicacao
npm install --save express

- body parser para pegar a conversao em objeto de uma req post no body
npm install --save body-parser

-- mysql
npm install --save mysql2

-- knex - http://knexjs.org/
npm install --save knex

- biblioteca de gerar hash de senhas, criptografia podem ser desfeitas, mas hash nao
npm install --save bcrypt


- jwt
npm install --save jsonwebtoken
 
 
  --- ---------------------------------------------------
  - grant mysql
  --- ---------------------------------------------------
 mysql -u root -h 192.168.8.14 -p 
 CREATE USER 'root'@'%' IDENTIFIED BY '123456';
 GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
