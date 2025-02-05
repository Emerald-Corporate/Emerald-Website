function calcular() {
  //Criando variáveis
  var rack = Number(in_rack.value);
  var computador = Number(in_computador.value);
  var tier = in_tier.value;
  var qtsensor = rack * 2;
  var qtarduino = Math.trunc(qtsensor / 6);

  //Valores cobrados
  var valsensor = qtsensor * 15;
  var valarduino = qtarduino * 150;
  var instalacao = 1200;
  var valprojeto = 5600;

  //Dowtimes
  var downtime = 5600;
  var downtimedia = downtime * 1440;
  var downtimeano = (downtimedia * 365) / 12;

  //Econômia
  var economia = downtime - (instalacao + valarduino + valsensor + valprojeto);
  var economiadia =
    downtimedia - (instalacao + valarduino + valsensor + valprojeto);
  var economiaano =
    downtimeano - (instalacao + valarduino + valsensor + valprojeto);

  //Validações
  if (rack == "" && computador == "" && downtime == "" && tier == "") {
    alert(
      "Todos os campos em branco, preencha para começar sua jornada conosco!"
    );
  } else if (rack == "" || computador == "" || downtime == "" || tier == "") {
    if (rack <= 0) {
      alert("Quantidade de racks inválida");
    }

    if (computador <= 0) {
      alert("Quantidade de computadores inválida!");
    }

    if (downtime == "") {
      alert("Para melhorar sua experiência, informe seu dowtime por minutos");
    }

    if (tier == "") {
      alert("Tier inválida");
    }
  } else {
    if (tier == 1) {
      valprojeto = valprojeto + 0;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtimedia.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtimeano.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Primeiro mês (Mensal + Instalação): <strong>R$${
                valprojeto + instalacao
              }</strong><br>
              Aluguel Mensal: <strong>R$${
                valarduino + valprojeto + valsensor
              }</strong><br><br>
              
              <h1>O quanto você vai previnir:</h1><br>
              Econômia por dowtime: <strong>R$${economia.toFixed(
                2
              )}</strong><br>
              Econômia por dia: <strong>R$${economiadia.toFixed(2)}</strong><br>
              Econômia por ano: <strong>R$${economiaano.toFixed(2)}</strong>`;
    } else if (tier == 2) {
      valprojeto = valprojeto + valprojeto * 0.1;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtimedia.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtimeano.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Primeiro mês (Mensal + Instalação): <strong>R$${
                valprojeto + instalacao
              }</strong><br>
              Aluguel Mensal: <strong>R$${
                valarduino + valprojeto + valsensor
              }</strong><br><br>
              
              <h1>O quanto você vai previnir:</h1><br>
              Econômia por dowtime: <strong>R$${economia.toFixed(
                2
              )}</strong><br>
              Econômia por dia: <strong>R$${economiadia.toFixed(2)}</strong><br>
              Econômia por ano: <strong>R$${economiaano.toFixed(2)}</strong>`;
    } else if (tier == 3) {
      valprojeto = valprojeto + valprojeto * 0.15;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtimedia.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtimeano.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Aluguel Mensal: <strong>R$${
                valarduino + valprojeto
              }</strong><br><br>
              
              <h1>O quanto você vai previnir:</h1><br>
              Econômia por dowtime: <strong>R$${economia.toFixed(
                2
              )}</strong><br>
              Econômia por dia: <strong>R$${economiadia.toFixed(2)}</strong><br>
              Econômia por ano: <strong>R$${economiaano.toFixed(2)}</strong>`;
    } else {
      valprojeto = valprojeto + valprojeto * 0.2;
      resultado.innerHTML = `<h1>O quanto você perde:</h1><br>
              A cada 1 minuto de dowtime: <strong>R$${downtime.toFixed(
                2
              )}</strong><br> 
              A cada dia de dowtime: <strong>R$${downtimedia.toFixed(
                2
              )}</strong><br>
              A cada ano (Paralisações frequêntes e imprevisíveis): <strong>R$${downtimeano.toFixed(
                2
              )}</strong><br><br>
              
              <h1>Quanto custa nosso projeto:</h1><br>
              Aluguel Mensal: <strong>R$${
                valarduino + valprojeto
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
