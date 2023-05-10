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
//  other way to create array: let values = Array.of("one", "two", "three");

// 2.   How can we we tell if a variable is holding an array?   
//      Use: isArray(variableName) method to check if a variable is an array. it will return true if so or false if not
// 3.   What data type is returned from an array with the typeof?
//      The typeof operator returns " object " for arrays because in JavaScript arrays are objects.
// 4.   What is an index in the context of an array?
//      it is the location/position of each element in an array. Arrays start at index zero.

// 5.   Given the following array, const carMakes = ["Honda", "Toyota", "Mazda"]

//      On a separate line use a built-in array method to add "Mercedes" to the end of the array (push)
//      On a separate line use a built-in array method to add "BMW" to the beginning of the array (unshift)
//      Print "Toyota" to the console accessing it by it's index  (is now index 2 because we aded one in front)

// const carMakes = ["Honda", "Toyota", "Mazda"];
// carMakes.push("Mercedes");
// carMakes.unshift("BMW");

// console.log(carMakes[2]);

// 6.   Using a built-in array method, create a new array from the first 3 values in the carMakes 
//      array and store it in a new variable. Your new array should contain the values ["BMW", "Honda", 
//      "Toyota"]   - found that this is accomplished by using the slice method!!

// const carMakes = ["BMW", "Honda", "Toyota", "Mazda", "Mercedes"];
// const carNewMakes = carMakes.slice(0,3)

// console.log(carNewMakes);

// 7.    Using built-in Array Methods and working with this array: const ericInfo = ["Eric", "Senior Instructor", "Florida"];

//      Remove "Eric" from the ericInfo array
//      Update "Florida" to "South Carolina"
//      Add "Schwartz" to the end of the array
//      The final array should look like this: ["Senior Instructor", "South Carolina", "Schwartz"]
//      Please feel free to look up array methods that you can use to accomplish the transformation 
//      above.

// const ericInfo = ["Eric", "Senior Instructor", "Florida"];
//  ericInfo.splice(0,1);  // removes eric from the array - or removes first element, one time
//  ericInfo[1] = "South Carolina";   // replaces FLorida with South Carolina  in index position 2
//  ericInfo.push("Schwartz");  // push adds element to end of array
// console.log(ericInfo);

// 8.   Print "apple" from each of the arrays below to the console

// const fruits1 = ["apple", "pear", "strawberry", "grape"];
// const fruits2 = [
//   ["strawberry", "grape"],
//   ["rambutan", "durian"],
//   ["orange", "apple"]
// ];
// const fruits3 = [
//   ["strawberry", ["pineapple"]],
//   ["grape", ["pear", ["apple"], "kiwi"]]
// ];

// console.log(fruits1[0]);
// console.log(fruits2[2][1]);
// console.log(fruits3[1][1][1][0]);

// 9.   Loop through the following array with a for() or while() loop printing each name to the console.
// const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]
// for (let i = 0; i < studentsArray.length; i++)

// console.log (studentsArray[i]);

// 10.  Loop through the following array with the forEach() Array method printing each name and 
//      the names index to the console.
/*
    Example Output:

    0: Ashley
    1: Craig
    ...

*/
//  works but check to see if colon is correct below?????
// const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]

// studentsArray.forEach(function (item, index) {
//     console.log(index, ":" , item);
// });

// 11.  Using the the map Array method square every number in the following array and save 
//      the results to a new array called numbersSquaredArray.

// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numbersSquaredArray = numbersArray.map(x => x*x);

// console.log(numbersSquaredArray);

// 12.  Using a looping method of your choice, loop over and sum all the values the 
//      new numbersSqauredArray storing the sum in a variable named arraySum. Print 
//      arraySum to the console.   left off here!!!!!