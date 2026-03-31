// Day 1 - Level 1 (Basics - Warmup)

// Level 1 (Basics - Warmup)
// Create a variable and store your name, then print it.
// Store two numbers and print their sum.
// Check the data type of "123" and 123.
// Swap two variables without using third variable.
// Convert string "50" into number.

// 1. Create a variable and store your name, then print it.
let name ="Aadi"
console.log(name)

let bhai = "Aadi"
console.log(bhai)

// 2. Store two numbers and print their sum.
let num1 = 10 ;
let num2= 30 ;
// console.log(num1 + num2)
console.log(num1+num2);

let number = 2;
let number2 = 3;
console.log(number + number2)

//3. Check the data type of "123" and 123.
console.log(typeof "123");
console.log(typeof 123);


console.log(typeof "543");
console.log(typeof 543);

//4.Swap two variables without using third variable.
let a = 5;
let b = 10 ;
 a= a+b; // a=15
 b = a-b //5
 a = a-b

 console.log("a:", a);
 console.log("b:", b);

 //4.  Swap two variables without using third variable.
 let x = 20 ;
 let y= 30 ;
  console.log("Before swapping: x =", x, "y =", y);

  x = x+y ; // x=50
  y = x-y ;  // y=20
  x = x-y ; // x=30

  console.log("After swapping: x =", x, "y =", y);


// 5. Convert string "50" into number.
let str = "50";
let num = Number(str);

console.log(num);

let str2 = "100";
let nums = Number(str2);

console.log(num2);

let str3 ="30" ;
 let num3= Number(str3);

 console.log(num3);


//  .toString() method is used to convert a number into a string.
let num4 =56;
let str4 = num4.toString();
 console.log(str4);
console.log("Running latest code...");
