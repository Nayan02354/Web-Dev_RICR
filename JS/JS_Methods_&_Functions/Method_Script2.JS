// Function Expression OR Anonymous Function
let abc = function () {
  console.log("Hello World");
};

console.log(abc);

abc(); // Ab ye fuction call ho jayega

// Function EXpression eg
let add = function(a, b) {
    return a + b;
};

console.log(add); // Ye function expression ko print karega, isme function ka naam nahi hai, isliye ye anonymous function hai

console.log(add(4, 6)); // Ye function call karega aur 4 aur 6 ko add karega, aur result return karega, jo ki 10 hoga

// Arrow Function
const arrowfun = () => 
{
    console.log("I am Arrow Funtion");
    
}

arrowfun(); // Ye arrow function ko call karega aur "I am Arrow Function" print karega

// Arrow Function with Implicit Return 
const addarrow = (a , b) => a + b; // Yha return keyword nahi aayega direct jo perform krna h who aayega, isliye ye implicit return hai

console.log(addarrow(5, 6)); // Ye arrow function ko call karega aur 5 aur 6 ko add karega, aur result return karega, jo ki 11 hoga


