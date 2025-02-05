// sessão
function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
    // window.alert(`Seja bem-vindo, ${nome}!`);
    b_usuario.innerHTML = nome;

    // finalizarAguardar();
  } else {
    window.location = "../login.html";
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
    divErrosLogin.innerHTML = texto;
  }
}

// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}

function sumirMensagem() {
  cardErro.style.display = "none";
}

// Parte Cadastro

function cadastrar() {
  aguardar();

  // empresa
  var empresa = {
    nomeServer: in_nome.value,
    cnpjServer: in_cnpj.value,
    emailServer: in_email.value,
    senhaServer: in_senha.value,
  };

  // end
  var endereco = {
    cepServer: in_cep.value,
    ufServer: in_uf.value,
    bairroServer: in_bairro.value,
    cidadeServer: in_cidade.value,
    ruaServer: in_rua.value,
  };

  // data center
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
  //Limpa valores do formulário de cep.
  document.getElementById("in_rua").value = "";
  document.getElementById("in_bairro").value = "";
  document.getElementById("in_cidade").value = "";
  document.getElementById("in_uf").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("in_rua").value = conteudo.logradouro;
    document.getElementById("in_bairro").value = conteudo.bairro;
    document.getElementById("in_cidade").value = conteudo.localidade;
    document.getElementById("in_uf").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("in_rua").value = "...";
      document.getElementById("in_bairro").value = "...";
      document.getElementById("in_cidade").value = "...";
      document.getElementById("in_uf").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" +
        cep +
        "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}