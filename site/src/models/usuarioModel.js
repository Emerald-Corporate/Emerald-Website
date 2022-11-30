var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM empresa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEnd(cep, uf, cidade, bairro, rua) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEnd():", cep, uf, cidade, bairro, rua); 
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // idEnd = `SELECT idEndereco FROM enderecoDC order by desc idEndereco limit 1;`

    var instrucao = `INSERT INTO enderecoDC (cep, uf, cidade, bairro, rua) VALUES ('${cep}', '${uf}', '${cidade}','${bairro}','${rua}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

function cadastrarEmp(nome, cnpj, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarEmp():", nome, cnpj, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    // idEmp = `SELECT idEmpresa FROM empresa order by idEmpresa limit 1;`
    var instrucao = `INSERT INTO empresa (nome, CNPJ, email, senha) VALUES ('${nome}', '${cnpj}', '${email}', '${senha}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrardata(servidor,tier,tamanho, fkEmpresa, fkEndereco) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrardata():", servidor,tier,tamanho);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `INSERT INTO datacenter (qtServidores, tier, tamanho, fkEndereco, fkEmpresa) VALUES ('${servidor}', '${tier}', '${tamanho}', '${fkEmpresa}', '${fkEndereco}');`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrarEnd,
    cadastrarEmp,
    cadastrardata,
    listar,
};