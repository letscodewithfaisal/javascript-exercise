//**alert, warn, error */
// window.alert(`This is a new hub`);


// const clue1 = "Muddy footprint near the window";
// const clue2 = "Broken glass on the table";

// console.log("clue found: ", clue1)
// console.log("clue found: ", clue2)

// const suspectName = "Dipesh"
// const suspectAge = 20
// console.log("suspect: ", suspectName, "| Age: ", suspectAge)

// console.warn("warning: Fingerprint evedence detected")
// console.error("warning: Fingerprint evedence detected")

//**console.table */

// const evidenceLog = [
//   {id: 1, item: "Muddy footprint", location: "window sill" },
//   {id: 2, item: "Broken glass", location: "Living room" },
//   {id: 3, item: "Red Fibre strand", location: "Door Handle" },

// ];

// console.table(evidenceLog)

//**console.group() */

// console.group("Ground starts")
// console.log("My Log 1")
// console.log("My Log 2")
// console.log("My Log 3")
// console.groupEnd()

//**console.time & console.timeEnd */

// console.time("time starts now");

// let dnaMatches = 0;
// for (let i = 0; i < 1_000_000; i++) {
//   dnaMatches++;
// }

// console.timeEnd("time starts now");

//** console.count */

// console.log("chaicode");
// console.log("chaicode");
// console.log("chaicode");
// console.log("chaicode");

//** We will know about Variables use and Standard*/

 //1. This is not good practice to use var , it will create lots of trouble in code.
// var shipName = "The amber"
// console.log("shipName: ", shipName)

// It is good practice to use let as variable Name and reassign a new value also.
// let crewCount = 12
// console.log("crew count: ", crewCount)
// crewCount = 14;  // Yes i can reassign here 
// console.log("crew count: ", crewCount)


// const captainName = "Jack Sparrow"
// console.log("captain Name: ", captainName);
// captainName = "MS Dhoni"

if (true) {
  var leakytreasure = "Gold coins";
}

for (var i = 0; i < 10; i++) {
  // using var here can create big trouble
}

for (let j = 0; j < 10; j++) {
  // 
}
console.log(leakytreasure);