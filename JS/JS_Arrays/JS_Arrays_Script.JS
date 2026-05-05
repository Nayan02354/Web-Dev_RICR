// let arr = [12, 23, 34, 45, 67, 87, 98];

// for (var i = 0; i < 7; i++) {
//   console.log(arr[i]);
// }

// console.log(arr);

// arr[2] = arr[2] + 10;
// console.log(arr);

// arr = [];
// console.log(arr);

// New Array
let arr = [12, 23, 34, 45, 56, 7, 78, 89, 90];
console.log(arr);

// Push
arr.push(99);
console.log(arr);

// Pop
arr.pop(99);
console.log(arr);

// UnShift - Adding an element at the beginning of the array
arr.unshift(11);
console.log(arr);

// Shift - Removing an element from the beginning of the array
arr.shift();
console.log(arr);

// at() - Accessing an element at a specific index
console.log(arr.at(4));

// indexOf() - Finding the index of a specific element
console.log(arr.indexOf(90));

// includes() - Checking if an element exists in the array
console.log(arr.includes(89));
console.log(arr.indexOf(89));

// New Array
let unar = [56, 23, 89, 45, 67, 34, 12, 98, 87, 45, 98];
console.log(unar);

// sort() - Sorting the array in ascending order
unar.sort();

console.log(unar);

// reverse() - Reversing the order of the array
unar.reverse();

console.log(unar);

// For each loop
let arr1 = [12, 23, 34, 45, 67, 87, 98];

for (var i = 0; i < 7; i++) {
  console.log(arr1[i]);
}

console.log("For Each loop");


arr1.forEach((element) => {
  console.log(element);
}); // element ki jagah hum kuch bhi likh sakte hain, lekin element ka matlab hai array ke har ek item ko represent karna.
