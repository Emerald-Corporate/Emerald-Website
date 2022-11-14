-- Criar e usar o banco de dados "Sprint03"
create database Sprint03;
use Sprint03;

-- Criar as tabelas "enderecoDC", "empresa", "usuario", "datacenter", "sensor" e "metrica"
create table enderecoDC(
idEndereco int primary key auto_increment,
cep char(8),
uf varchar(30),
cidade varchar(45),
bairro varchar(45),
rua varchar(45)
);

create table empresa (
idEmpresa int primary key auto_increment,
nome varchar(50),
CNPJ char(14),
email varchar(45),
senha varchar(18),
confirmacao varchar(18)
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
idDatacenter int primary key auto_increment,
qtServidores int,
tier varchar (45),
tamanho decimal (10,2)
);

create table sensor (
idSensor int primary key auto_increment,
codigoserial varchar (45),
modo varchar (45), constraint chkModo check (modo in ('Ativado', 'Manutenção', 'Desativado')),
dtModo date,
fkDatacenter int,
foreign key (fkDatacenter) references datacenter(idDatacenter)
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

-- Exibir dados das tabelas
select * from enderecoDC;
select * from empresa;
select * from usuario;
select * from datacenter;
select * from sensor;
select * from metrica;

INSERT INTO enderecoDC (cep, uf, cidade, bairro, rua) VALUES ('${cep}', '${uf}', '${cidade}','${bairro}','${rua}');INSERT INTO empresa (nome, CNPJ, email, senha, confirmacao) VALUES ('${nome}', '${cnpj}', '${email}', '${senha}', '${confirmacao}');INSERT INTO usuario (qtServidores, tier, tamanho) VALUES ('${servidor}', '${tier}', '${tamanho}');
