// Check if no is +ve or not
let n = 5;
if (n > 0) {
  console.log("Positive Integer");
} else {
  console.log("Negative Integer");
}

// Check if a person is eligible to vote or not
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// Check if a number is even or odd
let num = 10;
if (num % 2 == 0) {
  console.log("Even No");
} else {
  console.log("Odd No");
}

// Check what marks a student has obtained and print the grade accordingly
let marks = 100;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Failed");
}

// Check if the user has entered the correct username and password
let password = "abc123";
let user = "nayan";
if (password === "abc123" && user === "nayan") {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}

// ShortHand eg
let data;
let name = "nayan";
if (data) {
  data = name;
} else {
  data = "N/A";
}
console.log(data);

// Easy method to write the above code
let data1;
let name = "nayan1";

data1 = name || "N/A";

console.log(data1);

// Continue(skip) statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Break statement
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// Switch statement
let choice = 2;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }

  case 2: {
    console.log("Coffee");
    break;
  }

  case 3: {
    console.log("Lassi");
    break;
  }

  default: {
    console.log("IWater");
  }
}