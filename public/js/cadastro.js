// Validações
function signUp() {
  const enterprise = {
    name: input_name.value,
    mail: input_mail.value,
    phone: input_phone.value,
    cnpj: input_cnpj.value,
    password: input_password.value,
    confirmation: input_confirmation.value,
    cep: input_cep.value,
    uf: select_uf.value,
    city: input_city.value,
    neighborhood: input_neighborhood.value,
    street: input_street.value,
    number: input_number.value,
  };

  const missingFields = Object.keys(enterprise).filter(
    (key) => !enterprise[key]
  );

  if (missingFields.length > 0) {
    showModal("Preencha todos os campos", true);
  } else if (enterprise.password !== enterprise.confirmation) {
    showModal("Senhas diferentes", true);
  } else {
    fetch("/enterprises/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enterprise),
    })
      .then((resposta) => {
        if (resposta.ok) {
          showModal("Cadastro realizado com sucesso!", false);
          setTimeout(() => {
            window.location = "login.html";
          }, 3000);
          cleanForm();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch((resposta) => {
        console.log(`#ERRO: ${resposta}`);
      });
  }
}

// Valida CEP
function completeCEP(content) {
  if (!("erro" in content)) {
    document.getElementById("input_street").value = content.logradouro;
    document.getElementById("input_neighborhood").value = content.bairro;
    document.getElementById("input_city").value = content.localidade;
    document.getElementById("select_uf").value = content.uf;
  } else {
    showModal("CEP não encontrado.", true);
  }
}

function searchCEP(valor) {
  const cep = valor.replace(/\D/g, "");

  if (cep && /^[0-9]{8}$/.test(cep)) {
    document
      .querySelectorAll(
        "#input_street, #input_neighborhood, #input_city, #input_uf"
      )
      .forEach((field) => {
        field.value = "...";
      });

    const script = document.createElement("script");
    script.src = `https://viacep.com.br/ws/${cep}/json/?callback=completeCEP`;
    document.body.appendChild(script);
  } else {
    showModal("Formato de CEP inválido.", true);
  }
}
