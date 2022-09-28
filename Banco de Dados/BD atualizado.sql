-- Criação do Database

create database sprint02;

use sprint02;

-- Comandos DDL
create table Metrica (
idMetrica int primary key auto_increment,
temperatura float,
umidade float,
dataH datetime
);

create table sensor (
idsensor int auto_increment,
codigoSerial varchar (45),
estado varchar (45), constraint chkestado check (estado in ('Ativo', 'Manutenção', 'Desativado')),
dataM date,
fkmetrica int,
foreign key (fkmetrica) references Metrica(idMetrica),
primary key (idsensor, fkMetrica)
);

create table endereço (
idendereço int primary key auto_increment,
rua varchar (45),
bairro varchar (45),
cep char (8)
);

create table Usuario (
idUsuario int auto_increment,
nome varchar(50),
cpf char(11),
telefone char(11),
email varchar(50),
constraint chkEmail check (email like '%@%.%' 
and email not like '@%' and email not like '%.'),
senha varchar(70),
setor varchar(50),
fkendereço int,
foreign key (fkendereço) references endereço(idendereço),
primary key (idUsuario, fkendereço)
);

create table Empresa (
idEmpresa int auto_increment,
nome varchar(50),
CNPJ char(14),
tipoCNPJ varchar(2),
foreign key (fkusuario) references Usuario(idUsuario),
foreign key (fkMetrica) references Metrica(idMetrica),
foreign key (fkendereço) references endereço(idendereço),
primary key (idEmpresa, fkendereço),
fkendereço int,
fkUsuario int,
fkMetrica int
);

insert into endereço values
(null, 'rua jardim gameiro', 'Tatuapé', '20568712'),
(null, 'rua  augusto cinco', 'Ibirapuera', '20145980'),
(null, 'rua lamasal trio', 'Higienópolis', '02368795'),
(null, 'rua centro novo', 'Vila Olímpia', '45892013');
select * from endereço;

insert into Metrica values
(null, '27.21','24.25','2022-09-12 19:12:20'),
(null, '22.23','23.24','2022-07-09 17:09:13'),
(null, '32.10','30.12','2022-09-17 13:12:11'),
(null, '26.17','22.17','2022-01-19 14:23:45');
select * from Metrica;

insert into sensor values
(null, '45876der', 'Ativo', '2022-05-07', 1),
(null, '89462rtg', 'Desativado', '2019-08-07', 2),
(null, '15789huy', 'Ativo', '2020-01-01', 3),
(null, '57489hji', 'Manutenção', '2021-09-08', 4);
select * from sensor;

insert into Usuario values
(null, 'vitor', '87965430986', '11954240382', 'vitor.varela@sptech.school', 'vitor123', 'RH', 1),
(null, 'paulo', '12658790876', '12345678901', 'paulo.plinio@sptech.school', 'paulo123', 'desenvolvimento', 2),
(null, 'vivian', '65478967776', '15444789021', 'vivian.rosa@sptech.school', 'vivian123', 'atendimento', 3),
(null, 'aldo', '09876765432', '12345676543', 'jose.aldo@sptech.school', 'aldo123', 'busca', 4);
select * from Usuario;

insert into Empresa values
(null, 'aldo', '15467856432178', 'A1', 1, 4, 4),
(null, 'daniel', '13467896754567', 'A2', 2, 3, 3),
(null, 'amanda', '12358908789789', 'A3', 3, 2, 2),
(null, 'nataniel', '12543232456765', 'A1', 4, 1, 1);
select * from Empresa;
