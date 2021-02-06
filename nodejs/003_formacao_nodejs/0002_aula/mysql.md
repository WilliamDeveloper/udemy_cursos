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