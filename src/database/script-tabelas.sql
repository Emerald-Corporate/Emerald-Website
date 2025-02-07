-- Criar e usar o banco de dados "Sprint03"
CREATE DATABASE emerald;
USE emerald;

-- Criar as tabelas "enderecoDC", "empresa", "usuario", "datacenter", "sensor" e "metrica"
CREATE TABLE enterprise (
  id INT PRIMARY KEY auto_increment,
  name VARCHAR(50),
  mail VARCHAR(45),
  phone CHAR(11),
  cnpj CHAR(14),
  password VARCHAR(18),
  cep CHAR(8),
  uf CHAR(2),
  city VARCHAR(45),
  neighborhood VARCHAR(45),
  street VARCHAR(45),
  number VARCHAR(5)
);

SELECT * FROM enterprise;

DROP DATABASE emerald;