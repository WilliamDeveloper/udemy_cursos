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
-- express + socket.io
npm install --save express@4.15.2
npm install --save socket.io@2.1.1
--http://localhost:3000/socket.io/socket.io.js

-- mysql
npm install --save mysql2

-- ejs
https://ejs.co/

-- express-session
npm install --save express-session

- express-session + redis(3.2.100)
- https://github.com/MicrosoftArchive/redis
- https://github.com/microsoftarchive/redis/releases
npm install --save redis
npm install --save connect-redis

- habilitar manipulacao de form
-https://www.npmjs.com/package/formidable
npm install --save formidable

-moment.js - https://momentjs.com/
npm install --save moment



------------------------------------------
- bibliotecas bower
------------------------------------------
cd /saboroso/public

bower install --save chart.js
-- https://www.chartjs.org/samples/latest/


select
    concat(year(date), '-', month(date)) as date, 
    count(*) as total,
    sum(people) / count(*) as avg_people
    from tb_reservations
    where
        date between '2017-09-24' and '2018-09-24'
    group by year(date) desc, month(date) desc
    order by year(date) desc, month(date) desc;



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
