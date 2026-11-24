//**Copy/shallo copy and deep copy */
//  const Person = {
//   name: "faisal",
//   age: 22

// };

// const clonePerson = {...Person};
// clonePerson.name = "David";

// console.log(clonePerson);
// console.log(clonePerson.name);

/* Template Name */
// let text =
// `The quick
// brown fox
// jumps over
// the lazy dog`;

// console.log(text.length);
// console.log(text.)

// let price = 10;
// let VAT = 0.25;

// let total = `Total: ${(price * (1 + VAT )).toFixed(20)}`;
// console.log(total);

/*Template Literal */
// let firstName = "Faisal"
// let lastName = "Siddiqui"

// console.log(`My First Name is ${firstName} and Last Name is ${lastName}`);

// console.log(typeof (Array.isArray("Ravi")));
// console.log(Array.isArray([4]));

// const artifact = {
//   name: "obsidian crown",
//   era: "Ancient",
//   value: 5000,
//   material: "Volcanic glass",
// }

// const keys = Object.keys(artifact);
// const values: Object.values(artifact);
// const entries = Object.entries(artifact);

// console.log(values);

// console.log(keys);
// console.log(entries);

// console.log(Array.isArray(artifact));

// const priceObject = Object.fromEntries(priceList);
// console.log(priceObject);


console.log(brewPotion("Healing Herbs", 3));
function brewPotion(ingradient, dose) {
  return `brewing Potion with ${ingradient} (${dose})... Potion ready`;
}



