// sessão
function validarSessao() {
  let mail = sessionStorage.MAIL_USER;
  let password = sessionStorage.PASSWORD_USER;

  if (mail != null && password != null) {
    b_usuario.innerHTML = nome;
    // Colocar na input do login
  } else {
    window.location = "../login.html";
  }
}

function entrar() {
  var emailVar = in_mail.value;
  var senhaVar = in_senha.value;

  if (emailVar == "" || senhaVar == "") {
    cardErro.style.display = "block";
    alert("Campos em branco, preencha corretamente para entrar");
    finalizarAguardar();
    return false;
  } else {
    setInterval(sumirMensagem, 5000);
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));

          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.id;

          setTimeout(function () {
            window.location = "dashboard/dashboard.html";
          }, 2000);
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then((texto) => {
          console.error(texto);
          finalizarAguardar(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}
