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

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((data) => {
  console.log(data);
});

