//** Calculate age  

function calculateAge(birthyear) {
  let currentYear = new Date().getFullYear();
  return currentYear - birthyear;
}

console.log(calculateAge(2000));

