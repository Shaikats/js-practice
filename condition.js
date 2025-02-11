// 1. If-Else Condition
let age = 20;
let country = "USA";

if (age >= 18 && country === "USA") {
    console.log("You are eligible to vote in the USA.");
} else if (age >= 18 && country === "UK") {
    console.log("You are eligible to vote in the UK.");
} else {
    console.log("You are not eligible to vote.");
}

// 2. Using Logical Operators
let temperature = 30;
if (temperature > 25 && temperature < 35) {
    console.log("The weather is warm.");
} else if (temperature >= 35 || temperature <= 0) {
    console.log("Extreme weather conditions.");
}

