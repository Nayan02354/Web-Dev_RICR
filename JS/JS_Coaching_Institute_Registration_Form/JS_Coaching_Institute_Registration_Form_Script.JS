document
  .getElementById("personalDetailsForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    window.location.reload();
  });
