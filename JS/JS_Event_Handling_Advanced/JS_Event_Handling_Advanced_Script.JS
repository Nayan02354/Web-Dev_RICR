// Red color
document.getElementById("redBox").addEventListener("mouseover", fillRedColor);
document.getElementById("redBox").addEventListener("mouseout", fillBaseColor);

// Green color
document
  .getElementById("greenBox")
  .addEventListener("mouseover", fillGreenColor);
document.getElementById("greenBox").addEventListener("mouseout", fillBaseColor);

// Blue color
document.getElementById("blueBox").addEventListener("mouseover", fillBlueColor);
document.getElementById("blueBox").addEventListener("mouseout", fillBaseColor);

// Pink color
document.getElementById("pinkBox").addEventListener("mouseover", fillPinkColor);
document.getElementById("pinkBox").addEventListener("mouseout", fillBaseColor);

// Yellow color
document
  .getElementById("yellowBox")
  .addEventListener("mouseover", fillYellowColor);
document.getElementById("redBox").addEventListener("mouseout", fillBaseColor);

// Red color Fn called
function fillRedColor() {
  document.getElementById("bulb").style.backgroundColor = "red";
}

// Green color Fn called
function fillGreenColor() {
  document.getElementById("bulb").style.backgroundColor = "green";
}

// Blue color Fn called
function fillBlueColor() {
  document.getElementById("bulb").style.backgroundColor = "blue";
}

// Yelow color Fn called
function fillYellowColor() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}

// Pink color Fn called
function fillPinkColor() {
  document.getElementById("bulb").style.backgroundColor = "pink";
}

// Base color Fn called
function fillBaseColor() {
  document.getElementById("bulb").style.backgroundColor = "white";
}
