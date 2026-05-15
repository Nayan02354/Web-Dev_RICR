document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const Kilo = document.getElementById("totalKm").value;
let totalBill = 0;

if (Kilo > 10) {
    totalBill += 10 * 11;

    let remaining = Kilo - 10;

    totalBill += remaining * 10;
}
else {
    totalBill += Kilo * 11;
}

document.getElementById("totleKm").value="";
document.getElementById("Km").innerText= Kilo +"km";
document.getElementById("Breakdown").innerText=" (e.g., 10 km × Rs.11 = Rs.110, 40 km × Rs.10 = Rs.400).";
document.getElementById("totalBill").innerText= totalBill+ " ₹";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();
  window.location.reload();
});