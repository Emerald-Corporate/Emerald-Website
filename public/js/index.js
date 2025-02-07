var ttChatLoaderS = document.createElement("script");
document.tomticketChatLoaderScriptVersion = 2;
ttChatLoaderS.src =
  "https://emerald.tomticket.com/scripts-chat/chat.min.js" +
  "?id=EP59785" +
  "&account=3826240P25112022024414" +
  "&autoOpen=0" +
  "&hideWhenOffline=0" +
  "&d=emerald" +
  "&ts=" +
  new Date().getTime() +
  "&ref=" +
  encodeURIComponent(document.URL);
document.body.appendChild(ttChatLoaderS);


function signUp() {
  let errors = [];
  let missingFields = [];
  let fields = [
    { id: "input_name", name: "Nome" },
    { id: "input_cnpj", name: "CNPJ" },
    { id: "input_mail", name: "E-mail" },
    { id: "input_password", name: "Senha" },
    { id: "input_confirmation", name: "Confirmação de Senha" },
    { id: "input_server", name: "Servidores" },
    { id: "select_tier", name: "Tier" },
    { id: "input_size", name: "Tamanho" },
    { id: "input_cep", name: "CEP" },
    { id: "select_uf", name: "Estado" },
    { id: "input_city", name: "Cidade" },
    { id: "input_neighborhood", name: "Bairro" },
    { id: "input_street", name: "Rua" },
  ];

  fields.forEach((field) => {
    let input = document.getElementById(field.id);
    if (!input.value.trim()) {
      missingFields.push(field.name);
      input.style.outline = "2px solid red";
    } else {
      input.style.outline = "";
    }
  });

  if (missingFields.length > 0) {
    errors.push(`Os campos ${missingFields.join(", ")} estão vazios.`);
  }

  let password = document.getElementById("input_password");
  let confirmation = document.getElementById("input_confirmation");
  if (password.value !== confirmation.value) {
    errors.push("As senhas não coincidem.");
    password.style.outline = "2px solid red";
    confirmation.style.outline = "2px solid red";
  }

  if (errors.length > 0) {
    showModal(errors.join("<br>"), true);
    return;
  }

  showModal("Cadastro realizado com sucesso!", false);
}