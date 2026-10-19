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

//** Promise : `1` */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded successfully");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});

