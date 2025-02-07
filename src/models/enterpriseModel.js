let database = require("../database/config");

function authenticate(mail, password) {
  var instrucaoSql = `
      SELECT id, mail, password FROM enterprise WHERE mail = '${mail}' AND password = '${password}';
  `;
  return database.executar(instrucaoSql);
}

function registerCompany(
  name,
  mail,
  phone,
  cnpj,
  password,
  cep,
  uf,
  city,
  neighborhood,
  street,
  number
) {
  let instrucao = `INSERT INTO enterprise (name, mail, phone, cnpj, password, cep, uf, city, neighborhood, street, number) VALUES ('${name}', '${mail}', '${phone}', '${cnpj}', '${password}', '${cep}', '${uf}', '${city}', '${neighborhood}', '${street}', '${number}');`;
  return database.executar(instrucao);
}

module.exports = {
  authenticate,
  registerCompany,
};
