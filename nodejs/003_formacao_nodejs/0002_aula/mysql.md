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
select * from usuario where nome = 'luciane' and (idade=18 or idade=17);

delete from usuario where nome = 'meg';

update usuario set email='pimba@blau.com.br',idade=17 where nome= 'william';
