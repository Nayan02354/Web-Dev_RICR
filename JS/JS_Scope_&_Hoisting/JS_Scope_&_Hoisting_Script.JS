// SCOPE //
// let a = 10; let m ans undefined nhi aayega iskiye var use krenge
var a = 10;
console.log(a);
console.log(b);

// let b = 20;
var b = 20;
console.log(a);
console.log(b);

function classA() {
  // console.log("Test");
  console.log("ClassA", "Test");
}

function classB() {
  console.log("ClassB", "Test");
}

function classC() {
  let test2 = "This is local variable";
  console.log("ClassC", "Test");
  console.log("ClassC", test2);
}

function classD() {
  console.log("ClassD", "Test");

  { // Block Scope
    let v = 10;
    console.log(v);
  }
}

function classE() {
  console.log("ClassE", "Test");
}

function classF() {
  console.log("ClassF", "Test");
}

function classG() {
  console.log("ClassG", "Test");
}

classA();
classB();
classC();
classD();
classE();
classF();
classG();

function classB() {
  console.log("ClassB", "Test");
}

HOISTING //

let a;
let b;
let c;

a = 10;
console.log(a);
console.log(b);
console.log(c);

b = 15;
console.log(a);
console.log(b);
console.log(c);

c = 20;
console.log(a);
console.log(b);
console.log(c);

console.log(b);

// Using var instead of let
var a;
var b;
var c;

a = 10;
console.log(a);
console.log(b);
console.log(c);

b = 15;
console.log(a);
console.log(b);
console.log(c);

c = 20;
console.log(a);
console.log(b);
console.log(c);

//
abc();

function abc() {
  console.log("I am a function abc");
}

//Strict Mode
"use strict";
x = 20;
