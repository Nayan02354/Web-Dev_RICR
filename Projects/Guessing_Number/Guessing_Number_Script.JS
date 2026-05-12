document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const number = Number(document.getElementById("number").value);

  console.log(randomNumber);

  if (number === randomNumber) {
    window.alert("Congratulations! You guessed the correct number");
  } else if (number < randomNumber) {
    window.alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  } else {
    window.alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  }
});
