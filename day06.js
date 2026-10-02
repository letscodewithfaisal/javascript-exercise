// ** Q1. Write a program that checks whether a number is positive or negative.

// let num = 10;

// if (num > 0) {
//   console.log("Positive");
// } else {
//   console.log("Negative");
// }

// ** Q.2 Calculate the sum of numbers from 1 to 5.
// let i = 0;
// for (let i = 1; i <= 5; i++) {
//  let sum  sum + i;
// }

// console.log(sum);

// function myFunction(msg) {
//   console.log(msg);
// }
// myFunction("Hello World!");

// ** Arrow Function  
// const arroMulti = (a, b) => {
//   console.log(a * b);
// }

// Q4. Arrow function 
// const arrowSum =(a, b) => {
//   return a+b;
// }

// const printHello = () => {
//   console.log(printHello);
// }


//Q.6 Check Vowels in a string and count them.
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
  
//     if (char === "a" ||
//       char === "e" ||
//        char === "i" ||
//       char === "o" || 
//       char === "u") {
//       count++;
//     }
//   }
//    return (count);
// } 

// Q.7 create same program from (Q.6) for arrow function
const countVowels= (str) => {
  let count = 0;
  for (const char of str) {
    if (char === "a" ||
      char === "e" ||
       char === "i" ||
      char === "o" || 
      char === "u") {
      count++;
    }
  }
   return (count);
}