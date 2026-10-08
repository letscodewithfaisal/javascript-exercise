//** Q.1 Password Validator
// (Create a function that checks whether a password has at least 8 characters )

// function isValidpassword(password) {
//   return password.length >= 8;
// }

// console.log(isValidpassword("44887298482")); // true


//** Q.2 Find Largest of Three (10, 50, 30)
// Without using Math.max():

function findLargest(a, b, c) {
  if (a > b && a>c) {
    console.log(a);
    }
else if (b > c && b > a) {
  console.log(b);
}
else {
  console.log(c)
  }
  return findLargest;
}

findLargest(10, 50, 30); // 50
