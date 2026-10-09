//** Q.1 Password Validator    */
// (Create a function that checks whether a password has at least 8 characters )

// function isValidpassword(password) {
//   return password.length >= 8;
// }

// console.log(isValidpassword("44887298482")); // true


//** Q.2 Find Largest of Three (10, 50, 30)    */
// Without using Math.max():

// function findLargest(a, b, c) {
//   if (a > b && a>c) {
//     console.log(a);
//     }
// else if (b > c && b > a) {
//   console.log(b);
// }
// else {
//   console.log(c)
//   }
//   return findLargest;
// }

// findLargest(10, 50, 30); // 50

//** Using Math.max() to find the Largest of three (a, b, c)   */
// function largest(a, b, c) {
//     return Math.max(a, b, c);
// }

// console.log(largest(400, 10, 300));

//** Q.3 Count Digits */
// function countDigits(num) {
//   return num.toString().length;

// }
// console.log(countDigits(3747493)); // 7

//** Q.4 Reverse a String */
// Create: reverseString("hello"); // "olleh" */

// function reverseString(string) {
  
// }

// let array = [1, 2, 6, 12, 15, 25, 32, 45];


//** Array Method: Filter method to filter even number from an array */ 
// let evenArr = array.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(evenArr);

//**  Array Method: Reduce method (We are  given of marks of students. filter out of the marks of student that scored is 90+ .) */

// let marks = [87, 90, 96, 64, 99, 86 ]

// const highScore = marks.filter((mark) => mark >= 90);

// console.log(highScore);

//** Take a number n as input from user. Create an array of numbers from 1 to n. */
// Q.(A) Use the Reduce method to calculate sum of all numbers in the array. */

// let n = prompt("Enter a number: ");

// let arr = [];

// for (let i =1; i <=n; i++) {
//   arr[i-1] = i;

// }
// console.log(arr);

// let sum = arr.reduce((res, curr) =>  {
//   return res + curr;

// });
// console.log(sum);

// Q.(B) Use the Reduce method to calculate product [of all numbers in the array. */

let m = prompt("Enter a number: ");

let newarr = [];

for (let i =1; i <=m; i++) {
  newarr[i-1] = i;

}

let product = newarr.reduce((prev, curr) => {
  return prev * curr;
  })
  console.log(product); 