//----------------------------------------------------------
//Working with Functions
//----------------------------------------------------------

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

//-----------------------------------------------------------------------------
//Working with Arrays
//-----------------------------------------------------------------------------

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

 //const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const numbersSquaredArray = numbersArray.map(x => x*x);

//  console.log(numbersSquaredArray);

// 12.  Using a looping method of your choice, loop over and sum all the values the 
//      new numbersSqauredArray storing the sum in a variable named arraySum. Print 
//      arraySum to the console.   use part of array in last example!

// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const numbersSquaredArray = numbersArray.map(x => x*x);
// let arraySum = 0;
// numbersSquaredArray.forEach(number => {
//     arraySum += number;
// })
// console.log(arraySum);  //385 answer

// 13.  Given the following array, use a built-in array method to check if the array 
//      contains "Luke Skywalker" and if it does, print its index to the console.  left off here - not correct!!!

// const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];

// console.log(starWarsCharactersArray.includes('Luke Skywalker'));  // shows true that array contains luke

// console.log(starWarsCharactersArray.indexOf('Luke Skywalker'));    // shows index location where luke is 

//----------------------------------------------------------------------
// Working with Objects
//----------------------------------------------------------------------


// 1.   Create an object that represents a person

//      the object should have a name, an age, and a favorite color.
//      using console.log() outside of the object, access the properties of the object 
//      to print: "Hello, My name is name. I am age years old and my favorite color is 
//      favoriteColor". Replacing the italic words with the correct property from the object.

// let studentBob = {
//     name: "bob",
//     age: 23,
//     favoritecolor: "blue"
// }

//  console.log(`Hello, My name is ${studentBob.name}. I am ${studentBob.age} years old and my favorite color is ${studentBob.favoritecolor}.`);

// 2.   Add a method called sayHello to the person object created above that returns the same 
//      message that the previous console.log() printed to the console. Be sure to use the 
//      properties within the object to replace the italicized words. Below the object, call the 
//      new method within a console.log() statement.

// let studentBob = {
//     name: "bob",
//     age: 23,
//     favoritecolor: "blue",
//     sayHello: function() {
//     return `Hello, My name is ${this.name}. I am ${this.age} years old and my favorite color is ${this.favoritecolor}.`
//     }
// };
// console.log(studentBob.sayHello());

// ****Note! Make sure to use this. to call the elements. Also do not use : or = after return.
//      Also, remeber the difference between return and console.log().
//      console.log() is a method used to output messages or data to the console, which is useful for 
//      debugging or logging information during development. 
//      On the other hand, return is used to return a value or a result from a function.

 // 3.  Given the object below that represents a student, add a method averageGrade that returns 
 //     the average grade for the student by averaging the students grades array. Make sure you 
 //     test the method by printing the average grade to the console.

//  let studentBob = {
//      name: "bob",
//      age: 23,
//      major: "Psychology",
//      grades: [70, 92, 84, 75, 100],
//  };

//  studentBob.averageGrade = function() {
//     let sum = this.grades.reduce((a,b) => a+b);
//     let avg = sum / this.grades.length;
//     return avg;
//  }

//  console.log(studentBob.averageGrade());  //answer is 84.2

// //  // 4.  Add a new method to the studentBob object called printDetails that prints: "Hello, My name is name 
// //  //     and I am a student. I am age years old and my major is major. My current average grade is averageGrade.

//  studentBob.printDetails = function() { let phrase = `Hello, my name is ${this.name} and I am a student. I am ${this.age} years old and
// my major is ${this.major}. My current average grade is ${this.averageGrade()}.`  //remember to add the  () here or function wont be called
// return phrase;
//  };
// console.log(studentBob.printDetails());

// 5.   Loop through the following array of objects and print out the name property of each object to the console. As a 
//      bonus, see if you can find a string method that would make the names appear with all uppercase letters when 
//      printed.

// const charactersArray = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// for (let i=0; i< charactersArray.length; i++) {
//     console.log(charactersArray[i].name.toUpperCase());
// }

// 6.   Using the Array.filter() method on charactersArray, create a new array called filteredCharactersArray 
//      that only contains characters where the mass is greater than 80.

// const filteredCharactersArray = charactersArray.filter(character => {
//     return parseInt(character.mass) > 80;
//   });
  
//   console.log(filteredCharactersArray);


  // 7. Using the Array.map() method on charactersArray, create a new array called characterNames 
  //    that only contains names of each character as a string.

 // const characterNames = charactersArray.map(charactersArray.name);  //incorrect attempt 1
//   const characterNames = charactersArray.map(character => {       //correct attempt 2
//     return character.name;
//   });

//   console.log(characterNames);

  // 8. Using the Array.some() method on charactersArray. Check to see if a character has blue eyes. 
  //    If they do, print "Some characters have blue eyes" otherwise print "No characters have blue eyes" 
  //    to the console.

// if (charactersArray.some(character => character.eye_color === 'blue')) {  //I had this part right first
//   console.log('Some characters have blue eyes');        //had to rethink this logic syntax part
// } else {
//   console.log('No characters have blue eyes');
// }

// 9.   Using the Array.every() method on charactersArray. Check to see if all characters are male. 
//      If they every character is male, print "All the characters are male" to the console.

// if(charactersArray.every(character => character.gender === 'make')) {   //followed suit of last one and got it 1st try!
//     console.log('All the characters are male.');
// } else {
//     console.log('All the characters are not male');
// }

// 10.  Using a loop or Array.reduce() calculate the total mass of all the characters. Print the total 
//      mass to the console.

// for (let i=0; i< charactersArray.length; i++) {
//     console.log(charactersArray[i].mass);  // prints mass(s) separately
// }

// const totalMass = charactersArray.reduce((accumulator, currentCharacter) => {
//     return accumulator + Number(currentCharacter.mass);
// }, 0);

// console.log(totalMass);   //prints total mass

// 11.  Create a function called tagFavorite that takes an array as one parameter and a string that 
//      represents your favorite character's name as another parameter. This function does not need to 
//      return anything.

//      -Create a loop inside the function that loops over the array passed in.
//      -Add a property to each object in the array called favoriteCharacter and default it to false
//      -If the character name matches the character name passed in, set the favoriteCharacter property to 
//      true for that character's object
//      -Test your function by passing in the charactersArray and your favorite character's name when 
//      running the function. Print the charactersArray after you run the function to ensure the objects 
//      updated properly.

// function tagFavorite(array, favoriteCharacter) {
//     for (let i = 0; i < array.length; i++) {
//         array[i].favoriteCharacter = false;
//       if (array[i].name === favoriteCharacter) {
//         array[i].favoriteCharacter = true;
//       }
//     }
//   }

//   tagFavorite(charactersArray, 'Leia Organa');

// console.log(charactersArray);

//-------------------------------------------------------------------------------------
//  Working with the DOM
//-------------------------------------------------------------------------------------

// 1.   What is the DOM in relation to web development?
//      The Document Object Model, or DOM, is a programming interface for web documents
//      With the DOM, web developers can create dynamic and interactive web pages by using 
//      JavaScript and other programming languages to manipulate the DOM elements. 

// 2.   On your own: What is the difference between document.getElementById() and 
//      document.querySelector(). 
//      document .getElementByID() retrieves the element by its DOM ID.
//      document.querySelector()  retrieves an element that matches a selector or group
//      of selectors like divs or classes.

//  3.  What method could I use on the document object to find an HTML element by one of 
//      the classes in the elements class list if document.querySelector() was not available?

//      You could use: getElementsByClassName() method on the document object to find an HTML 
//      element by one of the classes in the element's class list.

//      html:<div class="myClass">Hello, world!</div>
//      script: const myDiv = document.getElementsByClassName('myClass')[0];

//  4.  On your own: What is the difference between using *element*.addEventListener() 
//      vs *element*.onclick?

//      addEventListener()- allows you to attach multiple event listeners to the same element.
//      onclick- can only have one event listener attached.

// 5.   Add a button HTML element to the <body> of index.html and give the new button an id 
//      attribute with a value of your choosing. You can just open the HTML file and add this. 
//      For now, DO NOT put any text between the opening and closing button tags.

//      -Using JavaScript, get a reference to the button element using it's id and store it in 
//      a variable. Print the value of the variable to the console to verify that you were able 
//      to get a reference to the expected element.
//      -Using JavaScript, update the button element to have the text, "Click Me".
//      -Using JavaScript, update the button element to have white text and a black background.

