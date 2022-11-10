-- Criar e usar o banco de dados "Sprint03"
create database Sprint03;
use Sprint03;

-- Criar as tabelas "enderecoDC", "empresa", "usuario", "datacenter", "sensor" e "metrica"
create table enderecoDC (
idEndereco int primary key auto_increment,
rua varchar (45),
bairro varchar (45),
cep char (8),
estado varchar (45),
cidade varchar (45),
país varchar (45)
);

create table empresa (
idEmpresa int primary key auto_increment,
nome varchar(50),
CNPJ char(14),
fkEmpresaTipo int,
foreign key (fkEmpresaTipo) references Empresa(idEmpresa),
TipoEmpresa varchar(45), constraint chkTipoEmpresa check (TipoEmpresa in ('Matriz', 'Filial'))
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
CPF char(11),
telefone char(11),
email varchar(50),
constraint chkEmail check (email like '%@%.%' and email not like '@%' and email not like '%.'),
senha varchar(70),
setor varchar(50),
fkEmpresa int,
foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table datacenter (
idDatacenter int auto_increment,
qtServidores int,
tier varchar (45),
tamanho decimal (10,2),
fkEmpresa int,
fkEndereco int,
foreign key (fkEmpresa) references empresa(idEmpresa),
foreign key (fkEndereco) references enderecoDC(idEndereco),
primary key (idDatacenter, fkEmpresa, fkEndereco)
);

create table sensor (
idSensor int auto_increment,
codigoserial varchar (45),
modo varchar (45), constraint chkModo check (modo in ('Ativado', 'Manutenção', 'Desativado')),
dtModo date,
fkDatacenter int,
foreign key (fkDatacenter) references datacenter(idDatacenter),
primary key (idSensor, fkDatacenter)
);

create table metrica (
idMetrica int auto_increment,
temperatura float,
umidade float,
dtHora datetime,
fkSensor int,
foreign key (fkSensor) references sensor(idSensor),
primary key (idMetrica, fkSensor)
);

-- Inserir dados nas tabelas "enderecoDC", "empresa", "usuario", "datacenter", "sensor" e "metrica"
insert into enderecoDC values
(null, 'Jardim Gameiro', 'Tatuapé', '20568712', 'Bahia', 'Salvador', 'Brasil'),
(null, 'Augusto Cinto', 'Ibirapuera', '20145980', 'Mato-Grosso', 'Cuiabá', 'Brasil'),
(null, 'Lamasal Trio', 'Higienópolis', '02368795', 'Paraná', 'Curitiba', 'Brasil'),
(null, 'Centro Novo', 'Vila Olímpia', '45892013', 'São Paulo', 'Campinas', 'Brasil');

insert into empresa values
(null, 'Tecnolog', '24589752145872', 1, 'Matriz'),
(null, 'Blue Origin', '15789654852145', 2, 'Filial'),
(null, 'Print', '12458796584214', 3, 'Matriz'),
(null, 'Gomes', '15874595685475', 4, 'Matriz');

insert into usuario values
(null, 'Vitor Varela', '87965430986', '11954240382', 'vitor.varela@sptech.school', 'vitor123', 'RH', 1),
(null, 'Paulo Alvares', '12658790876', '12345678901', 'paulo.plinio@sptech.school', 'paulo123', 'desenvolvimento', 2),
(null, 'Giovanna Gonçalves', '65478967776', '15444789021', 'vivian.rosa@sptech.school', 'vivian123', 'atendimento', 3),
(null, 'Aldo Moura', '09876765432', '12345676543', 'jose.aldo@sptech.school', 'aldo123', 'busca', 4);

insert into datacenter values
(null, '2', '1', '52.40', 1, 4),
(null, '5', '2', '75.20', 2, 3),
(null, '1', '3', '85.61', 3, 2),
(null, '7', '4', '75.12', 4, 1);

insert into sensor values
(null, '45876der', 'Ativado', '2022-05-07', 1),
(null, '89462rtg', 'Desativado', '2019-08-07', 2),
(null, '15789huy', 'Ativado', '2020-01-01', 3),
(null, '57489hji', 'Manutenção', '2021-09-08', 4);

insert into metrica values
(null, '27.21','24.25','2022-09-12 19:12:20', 1),
(null, '22.23','23.24','2022-07-09 17:09:13', 2),
(null, '32.10','30.12','2022-09-17 13:12:11', 3),
(null, '26.17','22.17','2022-01-19 14:23:45', 4);

-- Exibir dados das tabelas
select * from enderecoDC;
select * from empresa;
select * from usuario;
select * from datacenter;
select * from sensor;
select * from metrica;