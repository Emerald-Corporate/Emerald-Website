-- Criação do Database

create database sprint02;

use sprint02;

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
tipoCNPJ varchar(2), constraint chkCNPJ check (CNPJ in ('A1', 'A2', 'A3')),
logradouro varchar(60),
cep char(8),
rua varchar(45),
bairro varchar(45),
foreign key (fkusuario) references Usuario(idUsuario),
foreign key (fkMetrica) references Metrica(idMetrica),
fkUsuario int,
fkMetrica int
);

create table Metrica (
idMetrica int primary key auto_increment,
temperatura float,
umidade float,
dataH datetime
);
show tables;

insert into Usuario values
(null, 'vitor', '87965430986', '11954240382', 'vitor.varela@sptech.school', 'vitor123', 'RH'),
(null, 'paulo', '12658790876', '12345678901', 'paulo.plinio@sptech.school', 'paulo123', 'desenvolvimento'),
(null, 'vivian', '65478967776', '15444789021', 'vivian.rosa@sptech.school', 'vivian123', 'atendimento'),
(null, 'aldo', '09876765432', '12345676543', 'jose.aldo@sptech.school', 'aldo123', 'busca');
select * from Usuario;

insert into Metrica values
(null, '27.21','24.25','2022-09-12 19:12:20'),
(null, '22.23','23.24','2022-07-09 17:09:13'),
(null, '32.10','30.12','2022-09-17 13:12:11'),
(null, '26.17','22.17','2022-01-19 14:23:45');
select * from Metrica;

insert into Empresa values
(null, 'jose', '15789654589652', 'A1', 'praça da sé', '20568712', 'rua jardim gameiro', 'Tatuapé', 1, 4),
(null, 'danilo', '15789654235784', 'A2', 'limoeiro alto', '20145980', 'rua  augusto cinco', 'Ibirapuera', 2, 3),
(null, 'gabriel', '14568952357895', 'A3', 'caixa de água', '02368795', 'rua lamasal trio', 'Higienópolis', 3, 2),
(null, 'antonio', '45218796542354', 'A3', 'maercado do sul', '45892013', 'rua centro novo', 'Vila Olímpia', 4, 1);
select * from Empresa;

