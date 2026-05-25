// async function getNewJoke() {
// const API_URL = "https://v2.jokeapi.dev/joke/Dark?blacklistFlags=religious,political,racist";

// const response = await fetch(API_URL);

// const data = await response.json();

// // if(data.type === "single"){
// //     document.getElementById("setup").innerText = data.joke;
// //     document.getElementById("Delivery").innerText = "";
// // }
// // else{
// //     document.getElementById("setup").innerText = data.setup;
// //     document.getElementById("delivery").innerText = data.delivery;
// // }

// // Another way, instead of writing if-else
//     document.getElementById("setup").innerText = data.joke || data.setup;
//     document.getElementById("delivery").innerText = data.delivery || "";
// }


// New API use hui h 
async function getNewJoke() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";

  const response = await fetch(API_URL);

  const data = await response.json();

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("delivery").innerText = data.punchline;
}
