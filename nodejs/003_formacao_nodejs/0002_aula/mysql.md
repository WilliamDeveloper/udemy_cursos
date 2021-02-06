mysql -h localhost -u root -p
mysql -h localhost -u root

show databases;

create database sistemaDeCadastro;

use sistemaDeCadastro;

show tables;

create table usuario(
 nome   varchar(50),
 email  varchar(100),
 idade  int 
);

describe usuario;


insert into usuario(nome, email, idade) values ('william','a@a.com.br',18);
insert into usuario(nome, email, idade) values ('luciane','b@b.com.br',18);
insert into usuario(nome, email, idade) values ('fran','b@b.com.br',18);
insert into usuario(nome, email, idade) values ('meg','b@b.com.br',18);

select * from usuario;
select * from usuario where nome = 'luciane';

delete from usuario where nome = 'meg';
