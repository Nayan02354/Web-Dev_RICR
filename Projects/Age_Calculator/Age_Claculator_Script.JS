document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const CurrDate = document.getElementById("CurrentDate").value;

  //  Long Form of below code
  //  let CurrYear = Number(CurrDate.split("-")[0]);
  //  let dobDate = Number(CurrDate.split("-")[0]);
  //  const Age = CurrYear - dobYear;

  const Age = Number(CurrDate.split("-")[0]) - Number(dob.split("-")[0]);

  document.getElementById("DOB").vlaue = "";
  document.getElementById("CurrentDate").vlaue = "";
  document.getElementById("myAge").innerText = Age;

  console.log(Age);
});
