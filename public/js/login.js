function login() {
  let enterprise = {
    mail: input_mail.value,
    password: input_password.value,
  };

  if (!enterprise.mail || !enterprise.password) {
    showModal("Preencha todos os campos", true);
  } else {
    fetch("/enterprises/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enterprise),
    })
      .then(function (resposta) {
        if (resposta.ok) {
          showModal("Logado com sucesso!", false);
          resposta.json().then(() => {
            setTimeout(function () {
              window.location = "./dashboard/dashboard.html";
            }, 1000);
          });
        } else {
          resposta.text().then((texto) => {
            showModal(texto, true);
          });
        }
      })
      .catch(function (erro) {
        showModal(erro, true);
      });

    return false;
  }
}
