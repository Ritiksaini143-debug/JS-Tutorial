"use strict"; // treat all js code as newer version

// alert(3+3)   // We are using nodejs, not browser

let age = 25;

let Name = "Ritik Saini";

let a = "Volvo" + 16 + 4;

// 1. string in JavaScript

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let answer1 = "ritik saini";

let answer2 = "ritik saini";

let answer3 = '"ritik saini"';

let answer4 = "'ritik saini'";

let answer5 = "It's alright";

console.log(answer1, answer2, answer3, answer4, answer5);

// 2. JavaScript Numbers
// All JavaScript numbers are stored as decimal numbers (floating point).

// Numbers can be written with, or without decimals:

// Example
// With decimals:

let x1 = 34.0;

// Without decimals:

let x2 = 34;

let x3 = 3.13;

// 3. Bigint in javascript

let x4 = BigInt("120656566655665656656567");

console.log(x1, x2, x3, x4);

// 4. JavaScript Booleans
// Booleans can only have two values: true or false.

// Example

let x = 5;
let y = 5;
let z = 6;

console.log(x == y);

console.log(x == z);

// note - Booleans are often used in conditional testing.

// 5. JavaScript arrays are written with square brackets.

// Array items are separated by commas.

// The following code declares (creates) an array called cars, containing three items (car names):

// Example

 const cars = ["Saab", "Volvo", "BMW"];

 console.log(cars);

// Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

// 6.JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.

// Example

 const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

 console.log(person);

// The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

// 7.Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

// Example

let car = undefined;    // Value is undefined, type is undefined

console.log(typeof car);

let value = " " ;     // The value is "", the typeof is "string"

console.log(typeof value);