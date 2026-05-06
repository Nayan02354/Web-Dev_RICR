let fd = [
  ["Raj Vardhan", "18-11-1997", 7896965000, "Bhopal", "Teacher"],
  ["Nayan", "14-06-2006", 8461944038, "Bhopal", "Student"],
  ["Atif", "101-01-2005", 932485848, "Bhopal", "Friend1"],
  ["Aman", "04-04-2006", 7896965000, "Bhopal", "Friend2"],
];

fd.forEach((element) => {
  console.log(element);
});

// JSON = JavaScript Object Notation
let FData = [
  {
    name: "Raj Vardhan",
    dob: "18-11-1997",
    phone: 7896965000,
    city: "Bhopal",
    relation: "Teacher",
  },

  {
    name: "Nayan",
    dob: "14-06-2006",
    phone: 8461944038,
    city: "Bhopal",
    relation: "Student",
  },

  {
    name: "Atif",
    dob: "101-01-2005",
    phone: 932485848,
    city: "Bhopal",
    relation: "Friend1",
  },

  {
    name: "Aman",
    dob: "04-04-2006",
    phone: 7896965000,
    city: "Bhopal",
    relation: "Friend2",
  },
];

FData.forEach((item) => {
  console.log(item.name);
});

// Use of Map
FData.map((element, idx) => {
  console.log(element.phone);
});

//Accessing all data
console.log(FData);

//Accessing specific data
console.log(FData[1]["name"]);

// Notation Usez
console.log(FData[1]["name"]); // Bracket Notation
console.log(FData[1].name); // Dot Notation

// 2 Fn of JSON
let eshu = {
  name: "Nayan",
  dob: "14-06-2006",
  phone: 8461944038,
  city: "Bhopal",
  relation: "Student",
};

console.log(Object.keys(eshu));
console.log(Object.values(eshu));

console.log(Object.entries(eshu)); // Object Entrys = used to convert object into array of arrays

let ar = [22, 43, 67, 74, 8, 91, 5, 23, 32, 6, 6, 6, 6, 9, 4, 7];

ar.sort((a, b) => a - b); // Compare Function (Bubble sort lga h)
console.log(ar);

// Use of find (Find Single Seach krta h)
console.log(ar.find((val) => val > 20));

console.log(ar.find((val) => val === 32));

console.log(ar.findIndex((val) => val === 32));

console.log(ar.findLastIndex((val) => val === 6));

// Filter (Filter multiple Seach krta h)
let ar2 = [22, 43, 67, 74, 8, 91, 5, 23, 32, 6, 6, 6, 6, 9, 4, 7, 65, 78, 55];

console.log(ar2.filter((val) => val > 20));