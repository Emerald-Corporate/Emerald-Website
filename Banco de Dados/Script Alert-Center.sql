-- Criação do Database

create database sprint01;

use sprint01;

-- Comandos DDL


create table Usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
cpf char(11),
telefone char(11),
email varchar(50),
constraint chkEmail check (email like '%@%.%' 
and email not like '@%' and email not like '%.'),
senha varchar(70),
setor varchar(50)
);

create table Empresa (
idEmpresa int primary key auto_increment,
nome varchar(50),
CNPJ char(14),
logradouro varchar(60),
cep char(8)
);

create table Metrica (
idMetrica int primary key auto_increment,
temperatura float,
umidade float,
dataH datetime
);

alter table Metrica rename column dataH to dataHora;
alter table Empresa add column telefone char(11);

-- Comandos DML
insert into Usuario values 
(null,'José Alvares Dias','58864626000','11987229809','jose.alvares@hotmail.com','ewr123rw9123','Analise'),
(null,'Roberto Carlos Silva','81178697053','11987771238','roberto@hotmail.com','ewasda23rw9123','Analise');

insert into Empresa values 
(null,'Facebook','04520900000110','Rua Alvares Borge 1232','09812909','11229879890'),
(null,'Microsoft','10193235000109','Avenida José Marcos 120','12345678','11982763789'),
(null,'Twitter','37315634000143','Avenida José Marcos 120','98231780','11123763789');

insert into metrica values (null,23.4,28.3,'2022-12-09 01:22:09'),(null,26.7,'20.9','2022-12-09 06:12:57'),(null,100.7,'0.9','2022-12-11 05:13:17');

update Empresa set logradouro = 'Avenida Roberto Carlos 123' where idEmpresa = 3;
delete from Empresa where idEmpresa = 3;

-- Comandos de visualização
select * from Usuario;
select * from Empresa;
select * from Metrica;

-- Para filtrar temperaturas e umidades emergentes
select * from metrica where temperatura > 80 and umidade < 10;

-- Um usuario mandou email? Ache os dados dele
select * from usuario where email = 'roberto@hotmail.com';

-- Porque temos mais empresas com f?
select * from empresa where nome like 'F%';

-- Quantos usuarios que ultilizam 'hotmail' tenho no meus sistema?
select * from usuario where email like '%hotmail%';