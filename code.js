// 1. Variables
let name = "Alice";
const age = 25;

// 2. Function
function greet(person) {
  return "Hello, " + person + "!";
}

// 3. Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}

// 4. Conditional Statement
if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// 5. Object and Array
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

const fruits = ["Apple", "Banana", "Cherry"];

console.log(greet(person.name)); // Function call
console.log("Favorite fruit:", fruits[1]); // Accessing array
console.log("Person's city:", person.city); // Accessing object property
