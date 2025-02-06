// Parte Cadastro
function cadastrar() {
  var empresa = {
    nomeServer: in_nome.value,
    cnpjServer: in_cnpj.value,
    emailServer: in_email.value,
    senhaServer: in_senha.value,
  };

  var endereco = {
    cepServer: in_cep.value,
    ufServer: in_uf.value,
    bairroServer: in_bairro.value,
    cidadeServer: in_cidade.value,
    ruaServer: in_rua.value,
  };

  var dataCenter = {
    tierServer: sel_center.value,
    tamanhoServer: in_tamanho.value,
    servidorServer: in_server.value,
    fkEmpresa: undefined,
    fkEndereco: undefined,
  };

  console.log(empresa);
  console.log(endereco);
  console.log(dataCenter);

  if (in_senha.value != in_confirmacao.value) {
    cardErro.style.display = "block";
    cardErro.innerHTML = `Senhas não condizem`;
    finalizarAguardar();
    return false;
  }

  if (
    !empresa.nomeServer ||
    !empresa.cnpjServer ||
    !empresa.emailServer ||
    !empresa.senhaServer ||
    !dataCenter.servidorServer ||
    !dataCenter.tierServer ||
    !dataCenter.tamanhoServer ||
    !endereco.cepServer ||
    !endereco.ufServer ||
    !endereco.cidadeServer ||
    !endereco.bairroServer ||
    !endereco.ruaServer
  ) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "Campos em branco, preencha corretamente para continuar";
    finalizarAguardar();
    return false;
  } else {
    console.log("ELSE: ", empresa.nome);

    var idEmpresa;
    var idEndereco;

    fetch("/usuarios/cadastrar-emp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empresa),
    })
      .then(function (resposta) {
        console.log("RESPOSTA EMP: ", resposta);

        if (resposta.ok) {
          resposta
            .json()
            .then(function (respostaJson) {
              console.log("respostaJson", respostaJson);
              idEmpresa = respostaJson.insertId;

              fetch("/usuarios/cadastrar-end", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(endereco),
              }).then(function (resposta) {
                console.log("RESPOSTA END: ", resposta);

                if (resposta.ok) {
                  resposta
                    .json()
                    .then(function (respostaJson) {
                      console.log("respostaJson", respostaJson);
                      idEndereco = respostaJson.insertId;

                      (dataCenter.fkEmpresa = idEmpresa),
                        (dataCenter.fkEndereco = idEndereco),
                        fetch("/usuarios/cadastrar-server", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(dataCenter),
                        }).then(function (resposta) {
                          console.log("RESPOSTA END: ", resposta);
                        });
                    })
                    .catch();

                  console.log("JSON: ");
                }
              });
            })
            .catch();

          console.log("JSON: ");

          cardErro.style.display = "block";
          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso, direcionando para a tela de login...";
          setTimeout(() => {
            window.location = "login.html";
          }, "3000");
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });
  }
}

// Valida CEP
function limpa_formulário_cep() {
  document.getElementById("in_rua").value = "";
  document.getElementById("in_bairro").value = "";
  document.getElementById("in_cidade").value = "";
  document.getElementById("in_uf").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById("in_rua").value = conteudo.logradouro;
    document.getElementById("in_bairro").value = conteudo.bairro;
    document.getElementById("in_cidade").value = conteudo.localidade;
    document.getElementById("in_uf").value = conteudo.uf;
  } else {
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  var cep = valor.replace(/\D/g, "");

  if (cep != "") {
    var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      document.getElementById("in_rua").value = "...";
      document.getElementById("in_bairro").value = "...";
      document.getElementById("in_cidade").value = "...";
      document.getElementById("in_uf").value = "...";

      var script = document.createElement("script");

      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      document.body.appendChild(script);
    }
    else {
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  }
  else {
    limpa_formulário_cep();
  }
}
