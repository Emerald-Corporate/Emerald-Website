const e = require("express");
let enterpriseModel = require("../models/enterpriseModel");

function authenticate(req, res) {
  let mail = req.body.mail;
  let password = req.body.password;

  if (mail == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (password == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    enterpriseModel
      .authenticate(mail, password)
      .then((result) => {
        if (result.length == 1) {
          res.json(result[0]);
        } else if (result.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        }
      })
      .catch(function (error) {
        res.status(500).json(error.sqlMessage);
      });
  }
}

function registerCompany(req, res) {
  let name = req.body.name;
  let mail = req.body.mail;
  let phone = req.body.phone;
  let cnpj = req.body.cnpj;
  let password = req.body.password;
  let cep = req.body.cep;
  let uf = req.body.uf;
  let city = req.body.city;
  let neighborhood = req.body.neighborhood;
  let street = req.body.street;
  let number = req.body.number;

  if (name == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (mail == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (phone == undefined) {
    res.status(400).send("Seu telefone está undefined!");
  } else if (cnpj == undefined) {
    res.status(400).send("Seu CNPJ está undefined!");
  } else if (password == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (cep == undefined) {
    res.status(400).send("Seu cep está undefined!");
  } else if (uf == undefined) {
    res.status(400).send("Seu estado está undefined!");
  } else if (city == undefined) {
    res.status(400).send("Sua cidade está undefined!");
  } else if (neighborhood == undefined) {
    res.status(400).send("Seu bairro está undefined!");
  } else if (street == undefined) {
    res.status(400).send("Sua rua está undefined!");
  } else if (number == undefined) {
    res.status(400).send("Seu número está undefined!");
  } else {
    enterpriseModel
      .registerCompany(
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
      )
      .then(function (result) {
        res.json(result);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  authenticate,
  registerCompany,
};
