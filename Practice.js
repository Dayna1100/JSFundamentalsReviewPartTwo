//Working with Functions
//1. Create a function named `greeting` that prints the "Hello World" to the console.

// function greeting() {
//     console.log('Hello World');
// }

// greeting();

// 2. Create a function named `countingCharacters` that takes a `string` as a parameter.
//     - If the length of the string is less than 10, print the strings length to the 
//console 
//     - If the string length is more than 10, print a message that the string is too 
//long and include the string in the message.

// function countingCharacters(x) {
//     x='funnylaughs';
//     let length = x.length;

//     if (length <=10) {
//     console.log(length);
//     }
//     else {
//     console.log(x + ' is too long');
// }
// }  
// countingCharacters();

// 3. Create a function named difference that accepts two numbers as parameters.

// If either of the parameters provided is not a number, the function should return 
// the following error: "Input(s) must be a number!".
// It should return the difference if both parameters are numbers.
// Call the function within a console.log() statement to print the information 
// returned from the function. This is different than having the function print 
// to the console directly.

// function difference(x,y) {
//     x=7;
//     y=10;
//     //y='blue';

//     if (typeof x === "number" && typeof y === "number") {
//       return Math.abs(x - y);     // added in Math.abs to show difference between 2 numbers (capital M in Math)
//     } 
//     else {
//         return "Input(s) must be a number!";   
//     }

// }
// console.log(difference());

// 4. Using the function expression syntax, create a new function named advancedGreeting.

// It should accept hour as a parameter
// If the hour is less than 12, return a "Good morning" greeting
// If the hour is between 12 and 18, return a "Good afternoon" greeting
// If the hour is between 18 and 24, return a "Good night" greeting
// All other values should return "Invalid hour input".

// function time() {
//  }
// let  advancedGreeting = function(hour)  {
// hour = 20;

//     if (hour < 12) {
//         return "good morning";
//     } 
//     if (hour > 12 && hour <= 18) {
//         return "good afternoon";
//     }
//     if (hour > 18 && hour <= 24) {
//         return "good night";
//     }
//     else {
//         return "invalid hour input";
//     }
// }
// console.log(advancedGreeting());

//  5.  Can we access variables created inside the scope of a function outside of that function? 
//      You cannot access variables defined inside a function from outside the function or from another function.
//      Can a function access variables created in a parent scope?
//      When functions are nested, the inner function has access to the scope of the parent function. Thus, 
//      the inner function can access variables defined inside parent function, but the opposite is not true. 
//      The parent function cannot access variables declared inside the inner function.


//Working with Arrays

// 1.   What are two ways you can create an array in JavaScript?
// array literal - const arrayName = [one, two, three];
// array constructor "Array()"- const arrayName = new Array("one", "two", "three");

// 2.   How can we we tell if a variable is holding an array?   left off here 5/9 (note: did nt rewatch vids here)
// 3.   What data type is returned from an array with the typeof?
// 4.   What is an index in the context of an array?