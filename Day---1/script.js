// Day 1 - Level 1 (Basics - Warmup)

// Level 1 (Basics - Warmup)
// Create a variable and store your name, then print it.
// Store two numbers and print their sum.
// Check the data type of "123" and 123.
// Swap two variables without using third variable.
// Convert string "50" into number.

// 1. Create a variable and store your name, then print it.
let name = "Aadi"
console.log(name)

let bhai = "Aadi"
console.log(bhai)

// 2. Store two numbers and print their sum.
let num1 = 10;
let num2 = 30;
// console.log(num1 + num2)
console.log(num1 + num2);

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
let b = 10;
a = a + b; // a=15
b = a - b //5
a = a - b

console.log("a:", a);
console.log("b:", b);

//4.  Swap two variables without using third variable.
let x = 20;
let y = 30;
console.log("Before swapping: x =", x, "y =", y);

x = x + y; // x=50
y = x - y;  // y=20
x = x - y; // x=30

console.log("After swapping: x =", x, "y =", y);


// 5. Convert string "50" into number.
let str = "50";
let num = Number(str);

console.log(num);

let str2 = "100";
let nums = Number(str2);

console.log(nums);

let str3 = "30";
let num3 = Number(str3);

console.log(num3);


//  .toString() method is used to convert a number into a string.
let num4 = 56;
let str4 = num4.toString();
console.log(str4);
console.log("Running latest code...");

// Create a variable with value "100"
// Convert it into number and add 50

let str5 = "100 ";
let num5 = Number(str5);
let result = num5 + 50;
console.log(result);


let str6 = "200";
let num6 = Number(str6);
let value = num6 + 0.2;
console.log(value);


let str7 = "300";
let num7 = Number(str7);
let result2 = num7 + 4.05;
console.log(result2);


let str8 = "300";
let num8 = Number(str8);
let value2 = num8 + 3.15;
console.log(value2);


//  Level 2 (Operators + Conditions)
// Check if a number is even or odd.
// Check if a person is eligible to vote (age ≥ 18).
// Find the largest of 3 numbers.
// Check if a number is positive, negative, or zero.
// Check if a year is leap year or not.

// 1. Check if a number is even or odd.
let number1 = 7;
if (number1 % 2 === 0) {
  console.log(number1 + " is even");
} else {
  console.log(number1 + " is odd");
}

let number5 = 12;
if (number5 % 2 === 0) {
  console.log(number5 + " is even");

} else {
  console.log(number5 + " is odd");
}

//2.// Check if a person is eligible to vote (age ≥ 18).

let age = 20;

if (age >= 18) {
  console.log("AAdi is eligible to vote");
}
else {
  console.log("AAdi is not eligible to vote");

}

//3. Find the largest of 3 numbers.

let numA = 10;
let numB = 20;
let numC = 30;

if (numA >= numB && numA >= numC) {
  console.log(numA + " is the largest number");
}
else if (numB >= numA && numB >= numC) {
  console.log(numB + " is the largest number");
}
else {
  console.log(numC + " is the largest number");
}

let NUMA = 30;
let NUMB = 20;
let NUMC = 40;

if (NUMA >= NUMB && NUMA >= NUMC) {
  console.log(NUMA + " is the largest number");
} else if (NUMB >= NUMA && NUMB >= NUMC) {
  console.log(NUMB + " is the largest number");
}
else {
  console.log(NUMC + " is the largest number");
}

//4. Check if a number is positive, negative, or zero.
let number3 = -5;
if (number3 > 0) {
  console.log(number3 + " is a positive number");
} else if (number3 < 0) {
  console.log(number3 + " is a negative number");
}
else {
  console.log(number3 + "is zero");
}


let number4 = 1;
if (number4 <= 0) {
  console.log(number4 + "is the negative number");
}
else if (number4 >= 0) {
  console.log(number4 + "is the positive number");
}
else {
  console.log(number4 + "this is zero");
}

let numbero = 0;
if (numbero < 0) {
  console.log(numbero + " is the negative number");
}
else if (numbero === 0) {
  console.log(numbero + " is the zero number");
}
else {
  console.log(numbero + " this is positive number");
}

//5. Check if a year is leap year or not.
let year = 2028;
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
  console.log(year + " is a leap year");
}
else {
  console.log(year + " is not a leap year");
}


let year1 = 2032;
if (year1 % 4 === 0 && 100 !== 0 || year % 400 === 0) {
  console.log(year1 + " is a leap year")
} else {
  console.log(year1 + " is not a leap year")
}

let year2 = 2042;
if (year2 % 4 === 0 && 100 !== 0 || year % 400 === 0) {
  console.log(year2 + " is a leap year")
} else {
  console.log(year2 + " is not a leap year")
}

// Level 3(Loops)
// Print numbers from 1 to 10 using loop.
//   Print even numbers from 1 to 20.
// Find sum of numbers from 1 to 10.
// Print multiplication table of 5.
// Reverse a number(e.g., 123 → 321).

// 1.Print numbers from 1 to 10 using loop.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//  2. Print even numbers from 1 to 20.

for (let j = 1; j <= 20; j = j + 1) {
  if (j % 2 === 0) {
    console.log("even num : " + j)

  }

}

// 3.Find sum of numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i
};

console.log("Sum is " + sum);
