-- Criar e usar o banco de dados "Sprint03"
CREATE DATABASE Sprint03;
USE Sprint03;

-- Criar as tabelas "enderecoDC", "empresa", "datacenter", "usuario", "sensor" e "metrica"
CREATE TABLE enderecoDC(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
rua VARCHAR(45),
bairro VARCHAR(45),
cep CHAR(8),
estado VARCHAR(45),
cidade VARCHAR(45),
país VARCHAR(45)
);

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
CNPJ CHAR(14),
email VARCHAR(50),
senha VARCHAR(18)
);

CREATE TABLE datacenter(
idDatacenter INT PRIMARY KEY AUTO_INCREMENT,
qtServidores INT,
tier VARCHAR(45),
tamanho DECIMAL(10,2),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa),
fkEndereco INT,
FOREIGN KEY(fkEndereco) REFERENCES enderecoDC(idEndereco)
);

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
CPF CHAR(11),
telefone CHAR(11),
email VARCHAR(50),
senha VARCHAR(70),
setor VARCHAR(50),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE sensor(
idSensor INT PRIMARY KEY AUTO_INCREMENT,
codigoserial VARCHAR(45),
modo VARCHAR(45), CONSTRAINT chkModo CHECK (modo IN ('Ativado', 'Manutenção', 'Desativado')),
dtModo DATE,
fkDatacenter INT,
FOREIGN KEY(fkDatacenter) REFERENCES datacenter(idDatacenter)
);

CREATE TABLE metrica(
idMetrica INT AUTO_INCREMENT,
temperatura FLOAT,
umidade FLOAT,
dtHora DATETIME,
fkSensor INT,
FOREIGN KEY(fkSensor) REFERENCES sensor(idSensor),
PRIMARY KEY(idMetrica, fkSensor)
);

-- Exibir dados das tabelas
select * from enderecoDC;
select * from empresa;
select * from datacenter;
select * from usuario;
select * from sensor;
select * from metrica;