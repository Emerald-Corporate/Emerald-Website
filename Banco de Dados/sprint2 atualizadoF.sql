
create database sprint02;

use sprint02;

create table Fornecedor (
idFornecedor int primary key auto_increment,
CNPJ char (14),
Representante varchar (45),
dtContrato date
);

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
idEmpresa int auto_increment,
nome varchar(50),
CNPJ char(14),
foreign key (fkEmpresaTipo) references Empresa(idEmpresa),
primary key (idEmpresa, fkEmpresaTipo),
fkEmpresaTipo int
);

create table endereço (
idEndereço int auto_increment,
CEP char (8),
País varchar (45),
Estado varchar (45),
Cidade varchar (45),
Bairro varchar (45),
Rua varchar (45),
foreign key (fkempresa) references Empresa(idEmpresa),
primary key (idEndereço, fkempresa),
fkempresa int
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

create table Metrica (
idMetrica int primary key auto_increment,
Temperatura float,
Umidade float,
dataH datetime
);

create table sensor (
idsensor int auto_increment,
codigoSerial varchar (45),
estado varchar (45), constraint chkestado check (estado in ('Ativo', 'Manutenção', 'Desativado')),
dataM date,
fkmetrica int,
fkfornecedor int,
foreign key (fkmetrica) references Metrica(idMetrica),
foreign key (fkfornecedor) references Fornecedor(idFornecedor),
primary key (idsensor, fkMetrica, fkfornecedor)
);

create table DataCenter (
idDataCenter int auto_increment,
Qtservidores int,
Tier varchar (45),
Tamanho float (10,2),
fkempresa int,
fkendereço int,
foreign key (fkempresa) references Empresa(idEmpresa),
foreign key (fkendereço) references endereço(idEndereço),
primary key (idDataCenter, fkempresa, fkendereço)
);

insert into Fornecedor values
(null, '54986254785214', 'Cassiopeia', '2022-01-01'),
(null, '12598756425321', 'alto centro', '2022-02-02'),
(null, '14587956214587', 'tigre', '2022-03-03'),
(null, '12547895632548', 'melhor céu', '2022-04-04');
select * from Fornecedor;

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

insert into endereço values
(null, '54789542', 'brasil', 'ceará', 'fortaleza', 'aldeota', 'caixa alta', 1),
(null, '25478965', 'brasil', 'pará', 'belém', 'bonfim', 'fortifica', 2),
(null, '12547865', 'brasil', 'rio de janeiro', 'niterói', 'floresta', 'surfe grande', 3),
(null, '23548956', 'brasil', 'pernambuco', 'recife', 'casa amarela', 'melhor ostra', 4);
select * from endereço;

insert into Usuario values
(null, 'vitor', '87965430986', '11954240382', 'vitor.varela@sptech.school', 'vitor123', 'RH', 1),
(null, 'paulo', '12658790876', '12345678901', 'paulo.plinio@sptech.school', 'paulo123', 'desenvolvimento', 2),
(null, 'vivian', '65478967776', '15444789021', 'vivian.rosa@sptech.school', 'vivian123', 'atendimento', 3),
(null, 'aldo', '09876765432', '12345676543', 'jose.aldo@sptech.school', 'aldo123', 'busca', 4);
select * from Usuario;

insert into Metrica values
(null, '27.21','24.25','2022-09-12 19:12:20'),
(null, '22.23','23.24','2022-07-09 17:09:13'),
(null, '32.10','30.12','2022-09-17 13:12:11'),
(null, '26.17','22.17','2022-01-19 14:23:45');
select * from Metrica;

insert into sensor values
(null, '45876der', 'Ativo', '2022-05-07', 1, 4),
(null, '89462rtg', 'Desativado', '2019-08-07', 2, 3),
(null, '15789huy', 'Ativo', '2020-01-01', 3, 2),
(null, '57489hji', 'Manutenção', '2021-09-08', 4, 1);
select * from sensor;

insert into DataCenter values
(null, '2', 'I', '52.40', 1, 4),
(null, '5', 'II', '75.20', 2, 3),
(null, '1', 'III', '85.61', 3, 2),
(null, '7', 'IV', '75.12', 4, 1);
select * from DataCenter;


