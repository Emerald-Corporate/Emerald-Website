function calcular() {
  event.preventDefault();

  let racks = Number(input_racks.value);
  let computers = Number(input_computers.value);
  let downtime = Number(input_downtime.value);
  let tier = Number(select_tier.value);

  let sensors = racks * 2;
  let arduino = Math.trunc(sensors / 6);
  let sensors_value = sensors * 15;
  let arduino_value = arduino * 150;
  let installation = 1200;
  let project = 5600;
  let downtime_media = downtime * 1440;
  let downtime_year = (downtime_media * 365) / 12;
  let economia =
    downtime - (installation + arduino_value + sensors_value + project);
  let economiadia =
    downtime_media - (installation + arduino_value + sensors_value + project);
  let economiaano =
    downtime_year - (installation + arduino_value + sensors_value + project);

  console.log(racks);
  console.log(computers);
  console.log(downtime);
  console.log(racks);

  if (racks === 0 && computers === 0 && downtime === 0 && tier <= 0) {
    showModal("Todos os campos inválidos!", true);
  } else if (racks === 0) {
    showModal("Quantidade de racks inválida", true);
  } else if (computers === 0) {
    showModal("Quantidade de computadores inválida!", true);
  } else if (downtime === 0) {
    showModal("Dowtime por minutos inválido!", true);
  } else if (tier <= 0) {
    showModal("Tier inválida", true);
  } else {
    if (tier == 1) {
      project = project + 0;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtime_media.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtime_year.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Primeiro mês (Mensal + Instalação): <strong>R$${
                project + installation
              }</strong><br>
              Aluguel Mensal: <strong>R$${
                arduino_value + project + sensors_value
              }</strong><br><br>
              
              <h1>O quanto você vai previnir:</h1><br>
              Econômia por dowtime: <strong>R$${economia.toFixed(
                2
              )}</strong><br>
              Econômia por dia: <strong>R$${economiadia.toFixed(2)}</strong><br>
              Econômia por ano: <strong>R$${economiaano.toFixed(2)}</strong>`;
    } else if (tier == 2) {
      project = project + project * 0.1;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtime_media.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtime_year.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Primeiro mês (Mensal + Instalação): <strong>R$${
                project + installation
              }</strong><br>
              Aluguel Mensal: <strong>R$${
                arduino_value + project + sensors_value
              }</strong><br><br>
              
              <h1>O quanto você vai previnir:</h1><br>
              Econômia por dowtime: <strong>R$${economia.toFixed(
                2
              )}</strong><br>
              Econômia por dia: <strong>R$${economiadia.toFixed(2)}</strong><br>
              Econômia por ano: <strong>R$${economiaano.toFixed(2)}</strong>`;
    } else if (tier == 3) {
      project = project + project * 0.15;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtime_media.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtime_year.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Aluguel Mensal: <strong>R$${
                arduino_value + project
              }</strong><br><br>
              
              <h1>O quanto você vai previnir:</h1><br>
              Econômia por dowtime: <strong>R$${economia.toFixed(
                2
              )}</strong><br>
              Econômia por dia: <strong>R$${economiadia.toFixed(2)}</strong><br>
              Econômia por ano: <strong>R$${economiaano.toFixed(2)}</strong>`;
    } else {
      project = project + project * 0.2;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtime_media.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtime_year.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Aluguel Mensal: <strong>R$${
                arduino_value + project
              }</strong><br><br>
              
              <h1>O quanto você vai previnir:</h1><br>
              Econômia por dowtime: <strong>R$${economia.toFixed(
                2
              )}</strong><br>
              Econômia por dia: <strong>R$${economiadia.toFixed(2)}</strong><br>
              Econômia por ano: <strong>R$${economiaano.toFixed(2)}</strong>`;
    }
  }
}
