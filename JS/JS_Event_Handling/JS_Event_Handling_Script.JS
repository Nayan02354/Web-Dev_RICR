// Using On Click
function Bulb1ON(){
    document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function Bulb1OFF(){
    document.getElementById("bulb1").style.backgroundColor = "white";
}

function Bulb1Red(){
    document.getElementById("bulb1").style.backgroundColor = "Red";
}

function Bulb1Blue(){
    document.getElementById("bulb1").style.backgroundColor = "Blue";
}

function BulbGreen(){
    document.getElementById("bulb1").style.backgroundColor = "Green";
}

// Using Event Handling
function bulbRed(){
    document.getElementById("bulb1").style.backgroundColor = "Red";
}

function bulbBlue(){
    document.getElementById("bulb1").style.backgroundColor = "Blue";
}

function bulb1Green(){
    document.getElementById("bulb1").style.backgroundColor = "Green";
}

document.getElementById("bulbRed").addEventListener("click" , bulbRed);
document.getElementById("bulbBlue").addEventListener("click" , bulbBlue);
document.getElementById("bulbGreen").addEventListener("click" , BulbGreen);


document
    .getElementById("bulbColor")
    .addEventListener("change" , ChangebulbColor)

function ChangebulbColor(){
    const color = document.getElementById("bulbColor").value
    document.getElementById("bulb1").style.backgroundColor = color;
    // document.getElementById("abcd").style.backgroundColor = color;
    document.getElementById("abcd").style.color = color;
}

function reset(){
    window.location.reload();
}