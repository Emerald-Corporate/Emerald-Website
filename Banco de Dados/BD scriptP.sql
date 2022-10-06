
create database sprint02;

use sprint02;

create table endereçoDC (
idendereço int primary key auto_increment,
Rua varchar (45),
Bairro varchar (45),
Cep char (8),
Estado varchar (45),
Cidade varchar (45),
país varchar (45)
);

create table Empresa (
idEmpresa int primary key auto_increment,
nome varchar(50),
CNPJ char(14),
fkEmpresaTipo int,
foreign key (fkEmpresaTipo) references Empresa(idEmpresa)
);

create table Usuario (
idUsuario int primary key auto_increment,
Nome varchar(50),
CPF char(11),
Telefone char(11),
Email varchar(50),
constraint chkEmail check (email like '%@%.%' 
and email not like '@%' and email not like '%.'),
Senha varchar(70),
Setor varchar(50),
fkempresa int,
foreign key (fkempresa) references Empresa(idEmpresa)
);

create table DataCenter (
idDataCenter int auto_increment,
Qtservidores int,
Tier varchar (45),
Tamanho decimal (10,2),
fkempresa int,
fkendereço int,
foreign key (fkempresa) references Empresa(idEmpresa),
foreign key (fkendereço) references endereçoDC(idEndereço),
primary key (idDataCenter, fkempresa, fkendereço)
);

create table Sensor (
idsensor int auto_increment,
codigoSerial varchar (45),
estado varchar (45), constraint chkestado check (estado in ('Ativo', 'Manutenção', 'Desativado')),
dataM date,
fkdatacenter int,
foreign key (fkdatacenter) references DataCenter(idDataCenter),
primary key (idsensor, fkdatacenter)
);

create table Metrica (
idMetrica int auto_increment,
Temperatura float,
Umidade float,
dataH datetime,
fksensor int,
foreign key (fksensor) references Sensor(idsensor),
primary key (idMetrica, fksensor)
);

insert into endereçoDC values
(null, 'rua jardim gameiro', 'Tatuapé', '20568712', 'bahia', 'salvador', 'brasil'),
(null, 'rua  augusto cinco', 'Ibirapuera', '20145980', 'mato grosso', 'cuiabá', 'brasil'),
(null, 'rua lamasal trio', 'Higienópolis', '02368795', 'paraná', 'curitiba', 'brasil'),
(null, 'rua centro novo', 'Vila Olímpia', '45892013', 'são paulo', 'campinas', 'brasil');
select * from endereçoDC;

insert into Empresa values
(null, 'tecnolog', '24589752145872', 1),
(null, 'blue origin', '15789654852145', 2),
(null, 'print', '12458796584214', 3),
(null, 'gomes', '15874595685475', 4);
select * from Empresa;


insert into Usuario values
(null, 'vitor', '87965430986', '11954240382', 'vitor.varela@sptech.school', 'vitor123', 'RH', 1),
(null, 'paulo', '12658790876', '12345678901', 'paulo.plinio@sptech.school', 'paulo123', 'desenvolvimento', 2),
(null, 'vivian', '65478967776', '15444789021', 'vivian.rosa@sptech.school', 'vivian123', 'atendimento', 3),
(null, 'aldo', '09876765432', '12345676543', 'jose.aldo@sptech.school', 'aldo123', 'busca', 4);
select * from Usuario;

insert into DataCenter values
(null, '2', 'I', '52.40', 1, 4),
(null, '5', 'II', '75.20', 2, 3),
(null, '1', 'III', '85.61', 3, 2),
(null, '7', 'IV', '75.12', 4, 1);
select * from DataCenter;

insert into sensor values
(null, '45876der', 'Ativo', '2022-05-07', 1),
(null, '89462rtg', 'Desativado', '2019-08-07', 2),
(null, '15789huy', 'Ativo', '2020-01-01', 3),
(null, '57489hji', 'Manutenção', '2021-09-08', 4);
select * from sensor;

insert into Metrica values
(null, '27.21','24.25','2022-09-12 19:12:20', 1),
(null, '22.23','23.24','2022-07-09 17:09:13', 2),
(null, '32.10','30.12','2022-09-17 13:12:11', 3),
(null, '26.17','22.17','2022-01-19 14:23:45', 4);
select * from Metrica;

