document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("FullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("Password").value;

  const dataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(dataPacket);

  document.getElementById("FullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("Password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  confirm("Are you Sure") && window.location.reload();

  // OR //

  //   If else lihne k dusra tarika
  //   confirm("Are you Sure") && window.location.reload();
  //     if(confirm("Are you Sure")){
  //     window.location.reload();
});

document.addEventListener("keydown", (event) => {
  let KeyPress = event.key;
  console.log(KeyPress);

  KeyPress === "Escape" && window.location.reload();
});