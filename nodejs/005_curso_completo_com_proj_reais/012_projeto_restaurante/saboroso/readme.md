------------------------------------------
- preparacao usada para criar o projeto
------------------------------------------
- gerador de projetos express
npm install -g express-generator

express --ejs saboroso
copy on public template

cd saboroso
npm install
npm install -g bower  
cd saboroso/public/admin 
bower install

------------------------------------------
- preparando projeto
------------------------------------------
npm install

npm install -g bower  
cd saboroso/public/admin 
bower install


------------------------------------------
- rodar projeto
------------------------------------------

# subir o projeto no windows
set DEBUG=saboroso:* & npm start

http://localhost:3000/


------------------------------------------
- bibliotecas usadas
------------------------------------------
-- mysql
npm install --save mysql2

-- ejs
https://ejs.co/

-- express-session
npm install --save express-session

-- express-session + redis
npm install --save connect-redis






------------------------------------------
- acesso mysql - laragon
------------------------------------------
http://192.168.8.14/phpmyadmin/
root
123456

--- ---------------------------------------------------
- grant mysql
--- ---------------------------------------------------
 mysql -u root -h 192.168.8.14 -p 
 CREATE USER 'root'@'%' IDENTIFIED BY '123456';
 GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
