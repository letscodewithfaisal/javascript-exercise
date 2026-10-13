// Array 
//** 1. Create an array containing three numbers  */

// const number = [10, 20, 30];

//** 2. Print the second element.  */
// const number = [10, 20, 30];

// console.log(number[1]);

//** 3. Find the Length of this array. */

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

// let fruits = ["Apple", "Mango", "Banana"];

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit)
// })

//** 11. Print every student's name */
// let students = ["Ali", "Aman", "Rahul"];

// students.forEach(students => {
//  console.log("Hello " + students);
// });

//** 12. Add 5 to every number and print it */

// let numbers = [2, 3, 6, 9, 12];
// numbers.forEach(num => {
//   console.log(num + 5);
// });

//** 13. Calculate the total */
// let numbers = [10, 20, 30];
// let total = 0;
// numbers.forEach( num => {
//   total = total + num;
// })
// console.log(total);

//** Difference between forEach() and map() */
// let numbers = [1, 2, 3];

// let result1 = numbers.forEach(num => num * 2);
// let result2 = numbers.map(num => num * 2);

// console.log(result1); // undefined
// console.log(result2); // [2, 4, 6]

// What will this code print?
// [1, 2, 3].forEach(num => console.log(num + 1));

//** 14.Print Fruits with its index  */

// let fruits = ["Apple", "Mango", "Banana"];
// fruits.forEach( (fruit, index, arr) =>  {
//   console.log( fruit, index, arr,);

// })

//** 15. Count even numbers */

// let numbers = [1, 2, 4, 7, 8, 10, 13];

// let count = 0;

// numbers.forEach( (num => {
//   if ( num % 2 == 0) {
//     count++;
//   }
// }))
// console.log(count);


//** 16. Add 10 to every number */

// let numbers = [5, 10, 15, 20];

// numbers.forEach( num => {
//   console.log(num + 10) });
  

//** 17. Find the largest number */
// let numbers = [10, 45, 23, 89, 12];
// let largest = numbers[0];
// numbers.forEach( num => {
// if (num > largest) {
//   largest = num;
// }
// });
// console.log(largest);

//** 18. Find the smallest number */
let numbers = [50, 12, 78, 5, 34];

let smallest = numbers[0];

numbers.forEach(num => {
  
  if (num < smallest){
   smallest = num; }
});
console.log(smallest);