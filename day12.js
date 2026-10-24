//** Set Timeout */

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

//** Multiple timers */

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");

//** Create a  Delayed callback function */

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(data);
// });

// function sayHello() {
//   return "Hello World";
// }

// let message = sayHello();

//**SetTime Out */

// function sayHello() {
//     console.log("Hello Faisal");
// }

// setTimeout(sayHello, 3000);


//** Multiple Timeout */
// setTimeout(() => {
//     console.log("Hello");
// }, 1000);

// setTimeout(() => {
//     console.log("Welcome to JavaScript");
// }, 2000);

// setTimeout(() => {
//     console.log("Keep Learning");
// }, 3000);

//** Practice setTimeout: 1 */

// myDisplay("Start");
// setTimeout(function() {myDisplahy})

const nums = [1, 2, 3, 4, 5, 6];

let result = nums.map((e) => e * 3);
console.log(result);

function map(fn) {
  const result = [];

  for (i = 0; i < nums; i++) {
    const currentElement = nums [i];
    const num = fn(currentElement);
    result.push(num);
  }

  return result;
}