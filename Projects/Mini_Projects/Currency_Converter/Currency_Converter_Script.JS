const API_KEY = "875c7c0638e6e6ea18b5c4c8";

const userSelect = document.getElementById("Country1");

const outputSelect = document.getElementById("Country2");

async function loadCurrencyOptions() {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/INR`;

  const response = await fetch(url);

  const data = await response.json();

  const rates = data.conversion_rates;

  Object.keys(rates).forEach((currencyCode) => {
    const option1 = document.createElement("option");

    option1.value = currencyCode;

    option1.innerText = currencyCode;

    const option2 = document.createElement("option");

    option2.value = currencyCode;

    option2.innerText = currencyCode;

    userSelect.appendChild(option1);

    outputSelect.appendChild(option2);
  });
}

loadCurrencyOptions();

async function convert() {
  const UserCountry = document.getElementById("Country1").value;

  const OutputCountry = document.getElementById("Country2").value;

  const amount = document.getElementById("amount").value;

  if (UserCountry == "select") {
    document.getElementById("result").innerText = "Select From Country";

    return;
  }

  if (OutputCountry == "select") {
    document.getElementById("result").innerText = "Select To Country";

    return;
  }

  if (amount == "") {
    document.getElementById("result").innerText = "Enter Amount";

    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${UserCountry}`;

  const response = await fetch(url);

  const data = await response.json();

  const rate = data.conversion_rates[OutputCountry];

  const convertedAmount = amount * rate;

  document.getElementById("result").innerText = `${convertedAmount.toFixed(
    2,
  )} ${OutputCountry}`;
}

async function FetchFlg1() {
  const userSelectValue = document.getElementById("Country1").value;

  document.getElementById("flagImg1").src =
    `https://flagsapi.com/${userSelectValue.slice(0, 2)}/flat/64.png`;
}

async function FetchFlg2() {
  const outputSelectValue = document.getElementById("Country2").value;

  document.getElementById("flagImg2").src =
    `https://flagsapi.com/${outputSelectValue.slice(0, 2)}/flat/64.png`;
}
