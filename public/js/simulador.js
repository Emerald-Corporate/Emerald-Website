const result = document.querySelector(".banner");

function calculate() {
  event.preventDefault();

  const racks = Number(input_racks.value);
  const computers = Number(input_computers.value);
  const downtime = Number(input_downtime.value);
  const tier = Number(select_tier.value);

  if (!validate(racks, computers, downtime, tier)) return;

  const {
    downtimePerMinute,
    downtimePerDay,
    downtimePerYear,
    projectCost,
    monthlyCost,
    savings,
  } = costs(racks, downtime, tier);

  showResult(
    downtimePerMinute,
    downtimePerDay,
    downtimePerYear,
    projectCost,
    monthlyCost,
    savings
  );
}

function validate(racks, computers, downtime, tier) {
  if (racks === 0 && computers === 0 && downtime === 0 && tier <= 0) {
    showModal("Todos os campos inválidos!", true);
    return false;
  }

  if (racks === 0) {
    showModal("Quantidade de racks inválida", true);
    return false;
  }

  if (computers === 0) {
    showModal("Quantidade de computadores inválida!", true);
    return false;
  }

  if (downtime === 0) {
    showModal("Downtime por minuto inválido!", true);
    return false;
  }

  if (tier <= 0) {
    showModal("Tier inválida", true);
    return false;
  }

  return true;
}

function costs(racks, downtime, tier) {
  const sensors = racks * 2;
  const arduino = Math.trunc(sensors / 6);
  const sensorCost = sensors * 15;
  const arduinoCost = arduino * 150;
  const installationCost = 1200;
  let projectCost = 5600 * (1 + [0, 0, 0.1, 0.15, 0.2][tier]);

  const downtimePerMinute = downtime;
  const downtimePerDay = downtime * 1440;
  const downtimePerYear = (downtimePerDay * 365) / 12;

  const totalCost = installationCost + arduinoCost + sensorCost + projectCost;
  const savings = {
    perMinute: downtimePerMinute - totalCost,
    perDay: downtimePerDay - totalCost,
    perYear: downtimePerYear - totalCost,
  };

  return {
    downtimePerMinute,
    downtimePerDay,
    downtimePerYear,
    projectCost: projectCost + (tier === 1 ? installationCost : 0),
    monthlyCost: arduinoCost + projectCost + sensorCost,
    savings,
  };
}

function showResult(
  downtimePerMinute,
  downtimePerDay,
  downtimePerYear,
  projectCost,
  monthlyCost,
  savings
) {
  result.innerHTML = `
    <h2>O quanto você perde:</h2>
    <p>A cada 1 minuto de downtime: <strong>R$${downtimePerMinute.toFixed(
      2
    )}</strong></p>
    <p>A cada dia de downtime: <strong>R$${downtimePerDay.toFixed(
      2
    )}</strong></p>
    <p>A cada ano (Paralisações frequentes e imprevisíveis): <strong>R$${downtimePerYear.toFixed(
      2
    )}</strong></p>

    <h2>Quanto custa nosso projeto:</h2>
    <p>Primeiro mês (Mensal + Instalação): <strong>R$${projectCost.toFixed(
      2
    )}</strong></p>
    <p>Aluguel Mensal: <strong>R$${monthlyCost.toFixed(2)}</strong></p>

    <h2>O quanto você vai prevenir:</h2>
    <p>Economia por downtime: <strong>R$${savings.perMinute.toFixed(
      2
    )}</strong></p>
    <p>Economia por dia: <strong>R$${savings.perDay.toFixed(2)}</strong></p>
    <p>Economia por ano: <strong>R$${savings.perYear.toFixed(2)}</strong></p>

    <a href="cadastro.html">
      <button class="simple-button">
        <span>Gostou? Clique aqui!</span>
        <span></span>
      </button>
    </a>
  `;

  result.classList.add("active");
}
