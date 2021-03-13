
- gerador de projetos express
npm install -g express-generator

express --ejs saboroso
copy on public template


# subir o projeto no windows
set DEBUG=saboroso:* & npm start


npm install

npm install -g bower  
cd saboroso/public/admin 
bower install

-- mysql
npm install --save mysql2

-- ejs
https://ejs.co/


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
