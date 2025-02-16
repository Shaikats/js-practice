/* // Ternary Logical Operator
let age=17
let result= age >=18? "adult" : "minor" ;
console.log(result);
 */

/* let score = 80;

let result = score >= 50 ? score >= 80 ?
    "Passed with Good Number" : "Passed" : "Failed"
console.log(result); */

/* let email = "1243@gmail.com"
if (email) {
    console.log("Submitted");
} else {
    console.log("Please Enter Your Email");
}
 */
// &&
/* 
let email = 'abc@gmail.com'
password = 1243

if (email && password) {
    console.log("Logged in");
} else {
    console.log("Please fill in the input fields");
} */


// Switch Case for Less and Fixed Conditions

var theme = "dark";

switch (theme) {
    case "light":
        console.log("Light Theme Applied");
        break;
    case "dark": {
        console.log("Dark Theme Applied");
        break;
    }
    default:
        console.log("System Theme Applied");
}

