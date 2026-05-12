document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const billAmt = Number(document.getElementById("billAmt").value);

  const service = Number(document.getElementById("serviceFeedback").value);

  const totalPerson = Number(document.getElementById("totalPerson").value);

  const result = document.getElementById("result");
  const tip = (billAmt * service) / 100 / totalPerson;

  console.log(tip);
  

  document.getElementById("billAmt").value = "";

  document.getElementById("serviceFeedback").value = "";

  document.getElementById("totalPerson").value = "";

  document.getElementById("tipAmt").innerText  = tip;
});

