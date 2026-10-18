// const fruits = [ 'apple', 'cheeku',  'santra', 'mango']; 

//  console.log(fruits);
//  console.log(fruits[7]);
// console.log(fruits.length);
// console.log(fruits.includes('tarbooj'));
  // console.log(fruits);
//  console.log([firstElement]);
//  fruits.unshift('1', '2', '3');
//  console.log(fruits);
//  console.log(fruits.indexOf(4));
// console.log(fruits.slice (2, 5));
// fruits.push();
//  console.log(fruits);
// fruits.pop();
// fruits.push("strawberry");
// console.log(fruits);
// fruits.shift();
// fruits.unshift("coconut");
// delete fruits[2];
//  console.log(fruits);


// const myGirls = ["Kajal", "Priya", "Aisha"];

// const myBoys = ["Rehan", "Hussain", "Rahul"];

// let myChildren = myGirls.concat(myBoys);

// console.log(myChildren);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.copyWithin(2, 0);
// console.log(fruits);

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");

// console.log(fruits);


//** High Order Function */

// function meraPyaraFunction(udharKaFunction) {

//   return udharKaFunction() + 40;
// }

// function cartoon() {
//   return 10;
// }

// console.log(meraPyaraFunction(cartoon));


//** Q.1 Count numbers greater than 50 !

// let numbers = [25, 60, 45, 80, 90, 30, 75];
// let count = 0;

// numbers.forEach((num) => {
//     if (num > 50) {
//         count++;
//     }
// });

// console.log(count);


//** Q.2 Calculate the total */

// let prices = [100, 250, 50, 300, 150];

// let total = prices.reduce((sum, price) => {
//     return sum + price;
// }, 0);

// console.log(total);

//** Q.3 Find expensive products */

// let products = [
//     { name: "Laptop", price: 60000 },
//     { name: "Mouse", price: 1000 },
//     { name: "Phone", price: 25000 },
//     { name: "Keyboard", price: 3000 }
// ];

// let result = products.filter((product) => {
//     return product.price > 10000;
// });

// console.log(result);


//**  Get only usernames */

let users = [
    { username: "faisal", age: 22 },
    { username: "rahul", age: 24 },
    { username: "aman", age: 21 }
];

let usernames = users.map((user) => {
    return user.username;
});

console.log(usernames);