//** 1. Calculate age  (Year of Birth)

// function calculateAge(birthyear) {
//   let currentYear = new Date().getFullYear();
//   return currentYear - birthyear;
// }

// console.log(calculateAge(2000));

//** 2. Calculate age  (DD/MM/YYYY) */

// function calculateAge(day, month, year) {
//   let currentDate = new Date();

//   let birthDate = new Date(year, month -1, day);

// let years = currentDate.getFullYear() - birthDate.getFullYear();
// let months = currentDate.getMonth() - birthDate.getMonth();
// let days = currentDate.getDate() - birthDate.getDate();

// // Adjust Days, If it is Negative
// if (days < 0) {
//   months--;

//   let previousMonth = new Date(
//     currentDate.getFullYear(), 
//     currentDate.getMonth(), 
//     0);


// days += previousMonth.getDate();
//   }

// // Adjust Months, If it is Negative
// if(months < 0) {
//   years--;
//   month += 12;
// }
//   return `${years} years, ${months} months, ${days} days`;
// }

// console.log(calculateAge(24, 12, 1994));


//** 3. Celsius → Fahrenheit */
// function toFarenheit(celcius) {

//   return (celcius * 9/5 + 32);
// }
// console.log(toFarenheit(40));

//** 4. Positive, Negative, or Zero */

function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  }
  else if(num < 0) {
    return "Negative";
  }

else {
  return "Zero";
}
}

console.log(checkNumber(-99));