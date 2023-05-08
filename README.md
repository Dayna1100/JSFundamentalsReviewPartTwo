# JSFundamentalsReviewPartTwo
# JavaScript Fundamentals Review Exercises: Part II

## Instructions 

For this exercise, you will picking up where you left off with [JavaScript Fundamentals Review Exercises: Part I](https://gist.github.com/erics273/5567f2e8a7639a49fbe872c8abcaa4d8).  

For each individual exercise:
1. Review all questions before reviewing any content or working on solutions.
3. After reviewing the provided resources, do your best to answer the questions and work through the solutions.
4. After completing each part of the review, we will discuss each section as a larger group in the next live session.

> Take note of anything that went well and/or did not go well for you in a given section. These are great observations to bring up in the live session.

## Working with Functions
[JavaScript: Getting Started - Function Basics (Video) ~3m ](https://app.pluralsight.com/course-player?clipId=3ac0f3bf-cca7-49f7-8b9d-d9f0b0064e3d)

[JavaScript: Getting Started - Function Expressions (Video) ~3m ](https://app.pluralsight.com/course-player?clipId=2e0375dd-3765-41e2-bf3f-75e3d9e40e64)

[JavaScript: Getting Started - Passing Information to Functions (Video) ~4m ](https://app.pluralsight.com/course-player?clipId=36bbc5af-6d61-4df6-9fcb-d5a6cd6efaeb)

[JavaScript: Getting Started - Function Return Values (Video) ~4m ](https://app.pluralsight.com/course-player?clipId=74fc4cb8-e398-4ce2-b7d6-5fd53eb770ba)

[JavaScript: Getting Started - Function Scope (Video) ~4m ](https://app.pluralsight.com/course-player?clipId=2ed526cb-d986-44bc-898e-aca04d54cbb5)

1. Create a function named `greeting` that prints the "Hello World" to the console.

2. Create a function named `countingCharacters` that takes a `string` as a parameter.
    - If the length of the string is less than 10, print the strings length to the console 
    - If the string length is more than 10, print a message that the string is too long and include the string in the message.

3. Create a function named `difference` that accepts two numbers as parameters. 
    - If either of the parameters provided is not a number, the function should `return` the following error: "Input(s) must be a number!". 
    - It should `return` the difference if both parameters are numbers. 
    - Call the function within a `console.log()` statement to print the information returned from the function. This is different than having the function print to the console directly.
```js
/*
    Examples: 
    difference("hello", 3) // "Input(s) must be a number!"
    difference(3, 5) // 2
    difference(5, 1) // 4
 */
 ```

4. Using the function expression syntax, create a new function named `advancedGreeting`.
    - It should accept `hour` as a parameter
    - If the hour is less than 12, return a "Good morning" greeting
    - If the hour is between 12 and 18, return a "Good afternoon" greeting
    - If the hour is between 18 and 24, return a "Good night" greeting
    - All other values should return "Invalid hour input".

5. Can we access variables created inside the scope of a function outside of that function? Can a function access variables created in a parent scope?

## Working with Arrays
[JavaScript: Getting Started - Creating and Initializing Arrays (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=75a6ab40-6a57-4f08-bb1a-dc5926e6c31e)

[JavaScript: Getting Started - Accessing Array Items (Video) ~3m ](https://app.pluralsight.com/course-player?clipId=e5a2f688-b53b-4c41-be87-ae3c2d5f612b)

[JavaScript: Getting Started - Manipulating Arrays (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=5b3c06f0-934b-415f-a6f1-643d913ed780)

[JavaScript: Getting Started - Slice() and Splice() (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=01e4021a-9229-4523-ad0e-029c7d46026d)

[w3Schools: Array Methods](https://www.w3schools.com/js/js_array_methods.asp) 

[JavaScript: Getting Started - Array Searching and Looping (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=57716d38-3df0-46c9-88a5-110b4a2f91ae)

1. What are two ways you can create an array in JavaScript?

2. How can we we tell if a variable is holding an array?

3. What data type is returned from an array with the `typeof`?

4. What is an index in the context of an array?

5. Given the following array, `const carMakes = ["Honda", "Toyota", "Mazda"]`
    - On a separate line use a built-in array method to add "Mercedes" to the end of the array
    - On a separate line use a built-in array method to add "BMW" to the beginning of the array
    - Print "Toyota" to the console accessing it by it's index

6. Using a built-in array method, create a new array from the first 3 values in the carMakes array and store it in a new variable. Your new array should contain the values `["BMW", "Honda", "Toyota"]`

7. Using built-in Array Methods and working with this array: `const ericInfo = ["Eric", "Senior Instructor", "Florida"];`
    - Remove "Eric" from the `ericInfo` array
    - Update "Florida" to "South Carolina"
    - Add "Schwartz" to the end of the array
    - The final array should look like this: ["Senior Instructor", "South Carolina", "Schwartz"]
    - Please feel free to look up array methods that you can use to accomplish the transformation above.

8. Print "apple" from each of the arrays below to the console
```js
const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
  ["strawberry", "grape"],
  ["rambutan", "durian"],
  ["orange", "apple"]
];
const fruits3 = [
  ["strawberry", ["pineapple"]],
  ["grape", ["pear", ["apple"], "kiwi"]]
];
```

9. Loop through the following array with a `for()` or `while()` loop printing each name to the console.
```js
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]
```

10. Loop through the following array with the `forEach()` Array method printing each name and the names index to the console.
```js

/*
Example Output:

0: Ashley
1: Craig
...

*/
const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]
```

11. Using the  the `map` Array method square every number in the following array and save the results to a new array called `numbersSquaredArray`.
```js
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

12. Using a looping method of your choice, loop over and sum all the values the new `numbersSqauredArray` storing the sum in a variable named `arraySum`. Print `arraySum` to the console.


13. Given the following array, use a built-in array method to check if the array contains "Luke Skywalker" and if it does, print its index to the console.
```js
const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];
```

## Working with Objects

[JavaScript: Getting Started - Object Properties (Video) ~5m ](https://app.pluralsight.com/course-player?clipId=5667e465-8dd0-45c8-8882-5d9aa4bb4e14)

[JavaScript: Getting Started - Object Methods (Video) ~4m ](https://app.pluralsight.com/course-player?clipId=62c078a5-a060-49bd-a72e-269572d10b23)

[JavaScript: Getting Started - Passing Objects to Functions (Video) ~4m ](https://app.pluralsight.com/course-player?clipId=010af6c1-a0bc-47e5-b321-8f41c88ee2a5)

[JavaScript: Getting Started - Standard Built-in Objects (Video) ~7m ](https://app.pluralsight.com/course-player?clipId=92d9c29c-b215-47d7-bbe9-90aa3cf599b4)

1. Create an object that represents a person
    - the object should have a name, an age, and a favorite color.
    - using `console.log()` outside of the object, access the properties of the object to print: "Hello, My name is *name*. I am *age* years old and my favorite color is *favoriteColor*". Replacing the italic words with the correct property from the object.

2. Add a method called `sayHello` to the person object created above that returns the same message that the previous `console.log()` printed to the console. Be sure to use the properties within the object to replace the italicized words. Below the object, call the new method within a `console.log()` statement.

3. Given the object below that represents a student, add a method `averageGrade` that returns the average grade for the student by averaging the students `grades` array. Make sure you test the method by printing the average grade to the console.
```js
let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100]
}
```

4. Add a new method to the `studentBob` object called `printDetails` that prints: "Hello, My name is *name* and I am a student. I am *age* years old and my major is *major*. My current average grade is *averageGrade*. 

5. Loop through the following array of objects and print out the name property of each object to the console. As a bonus, see if you can find a string method that would make the names appear with all uppercase letters when printed.
```js
const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
```

6. Using the `Array.filter()` method on `charactersArray`, create a new array called `filteredCharactersArray` that only contains characters where the `mass` is greater than 80.

7. Using the `Array.map()` method on `charactersArray`, create a new array called `characterNames` that only contains names of each character as a string.

8. Using the `Array.some()` method on `charactersArray`. Check to see if a character has blue eyes. If they do, print "Some characters have blue eyes" otherwise print "No characters have blue eyes" to the console. 

9. Using the `Array.every()` method on `charactersArray`. Check to see if all characters are male. If they every character is male, print "All the characters are male" to the console.

10. Using a **loop or `Array.reduce()`** calculate the total mass of all the characters. Print the total mass to the console.

11. Create a function called `tagFavorite` that takes an `array` as one parameter and a `string` that represents your favorite character's name as another parameter. **This function does not need to return anything.**
    - Create a loop inside the function that loops over the array passed in.
    - Add a property to each object in the array called `favoriteCharacter` and default it to `false`
    - If the character name matches the character name passed in, set the `favoriteCharacter` property to true for that character's object
    - Test your function by passing in the `charactersArray` and your favorite character's name when running the function. Print the `charactersArray` after you run the function to ensure the objects updated properly.

## Working with the DOM

[JavaScript: Getting Started - Using Functions to Modify Web Pages (Video) ~4m](https://app.pluralsight.com/course-player?clipId=234071ed-da20-40ea-bdaf-89eebcb6edb8)

[JavaScript: Getting Started - The Document Object Model (Video) ~4m](https://app.pluralsight.com/course-player?clipId=77583204-5d22-47f8-85bb-b901989e0681)

[JavaScript: Getting Started - Styling DOM Elements (Video) ~4m](https://app.pluralsight.com/course-player?clipId=33a898d8-6900-4d4f-ac53-1b02c3df8c57)

[JavaScript: Getting Started - Detecting Button Clicks (Video) ~3m](https://app.pluralsight.com/course-player?clipId=18e3cc62-ebcb-4d06-942c-a7afba796ca5)

1. What is the `DOM` in relation to web development?

2. **On your own:** What is the difference between `document.getElementById()` and `document.querySelector()`.

3. What method could I use on the document object to find an HTML element by one of the classes in the elements class list if `document.querySelector()` was not available?

4. **On your own:** What is the difference between using `*element*.addEventListener()` vs `*element*.onclick`?

5. Add a `button` HTML element to the `<body>` of `index.html`  and give the new button an `id` attribute with a value of your choosing. You can just open the HTML file and add this. For now, **DO NOT** put any text between the opening and closing button tags.
    - Using JavaScript, get a reference to the button element using it's `id` and store it in a variable. Print the value of the variable to the console to verify that you were able to get a reference to the expected element.
    - Using JavaScript, update the button element to have the text, "Click Me".
    - Using JavaScript, update the button element to have white text and a black background.

6. Add an event listener to the button you created that responds to a click event. Print something to the console so you know that something happens when the button is clicked and your event listener is working.

7. Add a `span` HTML element to the `<body>` of `index.html` after the button and give the new span an `id` attribute with a value `counter`. Use a 0 as the contents of your span.
    - Using JavaScript, get a reference to the span element using it's `id` and store it in a variable. Print the value of the variable to the console to verify that you were able to get a reference to the expected element.
    - Update the event listener for the `button` to increase the 0 in the `span` by one every time the button is clicked. 

8. **Add a new event listener** to the button you created that responds to a right-click event (the actual event is called something else). Print something to the console so you know that something happens when the button is right-clicked and your event listener is working.
    - Be sure to use `event.preventDefault();` near the top of the event listener.
    - What behavior did adding `event.preventDefault();` change?
    - Update the new event listener for the `button` to decrease the number in the `span` by one every time the button is clicked.

9. Given the following function that returns a random color from an array, change the background color of the HTML document every time the button is clicked or right-clicked.
```js
function randomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    
    let randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0)
    
    return colors[randomIndex]
}
```

10. Build the contents of a table with JavaScript
    - Add the following table structure to `index.html`. You are not permitted to edit this table structure unless it is with JavaScript.
    ```html
     <table id="quizQuestionsTable">
        <thead>
            <th>ID</th>
            <th>Question</th>
            <th>Category</th>
            <th>Value</th>
            <th>Answer</th>
        </thead>
        <tbody>

        </tbody>
    </table>
    ```
    - Using JavaScript, get a reference to the `tbody` element using `document.querySelector()` passing it the right `selector` to target the `tbody` of the table and store it in a variable. Print the value of the variable to the console to verify that you were able to get a reference to the expected element.
    - Looping over the following array of objects (quizQuestions), add a table row for each object in the array only populating the data that is in the header row provided.
    ```js
    let quizQuestions = [
        {
            "id": 79680,
            "answer": "anarchy",
            "question": "In 1921 the black flag flew at the funeral of Peter Kropotkin, philosopher of this government-negating ideology",
            "value": 1000,
            "airdate": "2007-02-27T12:00:00.000Z",
            "created_at": "2014-02-11T23:38:41.721Z",
            "updated_at": "2014-02-11T23:38:41.721Z",
            "category_id": 10459,
            "game_id": null,
            "invalid_count": null,
            "category": {
                "id": 10459,
                "title": "political science",
                "created_at": "2014-02-11T23:38:40.866Z",
                "updated_at": "2014-02-11T23:38:40.866Z",
                "clues_count": 5
            }
        },
        {
            "id": 79681,
            "answer": "Africa",
            "question": "In 2000 Rift Valley fever scared WHO by making its first appearance outside this continent",
            "value": 1000,
            "airdate": "2007-02-27T12:00:00.000Z",
            "created_at": "2014-02-11T23:38:41.751Z",
            "updated_at": "2014-02-11T23:38:41.751Z",
            "category_id": 10460,
            "game_id": null,
            "invalid_count": null,
            "category": {
                "id": 10460,
                "title": "who says",
                "created_at": "2014-02-11T23:38:40.880Z",
                "updated_at": "2014-02-11T23:38:40.880Z",
                "clues_count": 5
            }
        },
        {
            "id": 79682,
            "answer": "yew",
            "question": "\"It had to be\" this evergreen tree that is a homonym for a second-person-singular pronoun",
            "value": 1000,
            "airdate": "2007-02-27T12:00:00.000Z",
            "created_at": "2014-02-11T23:38:41.780Z",
            "updated_at": "2014-02-11T23:38:41.780Z",
            "category_id": 10461,
            "game_id": null,
            "invalid_count": null,
            "category": {
                "id": 10461,
                "title": "also a 3-letter tree",
                "created_at": "2014-02-11T23:38:40.895Z",
                "updated_at": "2014-02-11T23:38:40.895Z",
                "clues_count": 5
            }
        },
        {
            "id": 79683,
            "answer": "Alvin Ailey",
            "question": "In 1977 Madonna won a scholarship to the studio of this alliteratively named N.Y. choreographer",
            "value": 1000,
            "airdate": "2007-02-27T12:00:00.000Z",
            "created_at": "2014-02-11T23:38:41.809Z",
            "updated_at": "2014-02-11T23:38:41.809Z",
            "category_id": 10462,
            "game_id": null,
            "invalid_count": null,
            "category": {
                "id": 10462,
                "title": "prime madonna",
                "created_at": "2014-02-11T23:38:40.909Z",
                "updated_at": "2014-02-11T23:38:40.909Z",
                "clues_count": 5
            }
        },
        {
            "id": 79684,
            "answer": "Harry Potter",
            "question": "(Cheryl of the Clue Crew has a new review from the zoo--the London Zoo in Regent's Park, London.)  At the zoo in Regent's Park this character first discovers his unusual powers when he talks to the snakes",
            "value": 200,
            "airdate": "2007-02-26T12:00:00.000Z",
            "created_at": "2014-02-11T23:38:42.318Z",
            "updated_at": "2014-02-11T23:38:42.318Z",
            "category_id": 10463,
            "game_id": null,
            "invalid_count": null,
            "category": {
                "id": 10463,
                "title": "literary london",
                "created_at": "2014-02-11T23:38:42.190Z",
                "updated_at": "2014-02-11T23:38:42.190Z",
                "clues_count": 5
            }
        }
    ]
    ```
    - The result of the first iteration of the loop would add the following structure to the `tbody` and repeat for each question in the array.
    ```html
        <tr>
            <td>79680</td>
            <td>In 1921 the black flag flew at the funeral of Peter Kropotkin, philosopher of this government-negating ideology</td>
            <td>political science</td>
            <td>1000</td>
            <td>anarchy</td>
        </tr>
    ```



