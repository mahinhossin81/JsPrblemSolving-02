//1. Create a variable called carName, assign the value Volvo to it.

// let carName = "Volvo";



/*2. On one single line, declare three variables with the following names and values:
firstName = "John"
lastName = "Doe"
age = 35*/

// let firstName = "Jhon", lastName = "Doe", age = 35;



/*3. Use the correct assignment operator that will result in x being 50 (same as x = x * y). */
//x = 10;

// x = 10;
// y = 5;
// x *= y;



/*4. Use comments to describe the correct data type of the following variables:*/

// const userInfo = {
//   firstName: 'Jhon',
//   lastName: 'Deo'
// };

// let x = userInfo;
// console.log(typeof x) // data type: object

// let num = 129;
// console.log(typeof num); // data type: number

// let str = 'Game is over';
// console.log(str); // data type: str


/*5. Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}
*/

// function myFunction() {
//   console.log("Hello World!");
// }

// let x = myFunction();
// console.log(x);



/*6. Create an object called person with name = John, age = 50, Then,
access the object to alert("John is 50").*/

// let person = {
//     name: "John",
//     age: 50
//   };
  
// alert(person.name + " is " + person.age);

  
// /*1. The <button> element should do something when someone clicks on it. Try to fix it! <button>Click me.</button> */

//<button onclick="alert('Button clicked!')">Click me.</button>






/*1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];


2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; */


//1:

// const cars = ["Volvo", "Jeep", "Mercedes"];
// console.log(cars.length); 

//2:
// const Brand = ["Volvo", "Jeep", "Mercedes"];
// Brand[0] = "Ford"; 



/*
1. Use the correct Math method to create a random number.

2. Use the correct Math method to return the largest number of 10 and 20.

3. Use the correct Math method to get the square root of 9.



//1:
// const randomNumber = Math.random();

//2:
// const largestNumber = Math.max(10, 20); 

//3:
// const squareRoot = Math.sqrt(9); 




/*1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert() // ? 


2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".



//1:

// x = 10;
// y = 5;
// alert(x > y); 


//2:

// const age = 16;
// alert(age < 18 ? "Too young" : "Old enough");