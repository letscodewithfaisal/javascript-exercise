// Array 
//** 1. Create an array containing three numbers  */

// const number = [10, 20, 30];

//** 2. Print the second element.  */
// const number = [10, 20, 30];

// console.log(number[1]);

//** 3. Add 40 to the end of this array. */

// const fruits = ['Banana', 'Grapes', 'Apple', 'Mango', 'Orange', 'Dragon'];

//console.log(fruits);
// console.log(fruits.length);

//** 4. Create a new array with every number doubled. */
// const number = [2, 5, 8, 9];
// let doubled = number.map(num => num*2);
// console.log(doubled);


//** 5. Push() - add to end */
// let arr = [10, 20];
// arr.push(30);
// console.log(arr); // [10, 20, 30] */

//** 6. Pop () - Remove from end */
// const arr = [10, 20, 30];
// arr.pop();
// console.log(arr); // [10, 20]

//** 7. unshift() - add to the begining */
//  let arr = [20, 30];

//  arr.unshift(10);
//  console.log(arr); // [10, 20, 30]


//** 8. shift() — remove from the beginning */

// let arr = [10, 20, 30];
// arr.shift();
//  console.log(arr); // [20, 30]

//** 9. forEach() — perform an action for every item */

// let nums = [2, 4, 7, 9];

// nums.forEach(function(num){
//   console.log(num);
  
// });

//** 10. forEach() — perform an action for every item */

let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach((fruit, index) => {
  console.log(index, fruit)
})