// window.alert(`This is a new hub`);

const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("clue found: ", clue1)
console.log("clue found: ", clue2)

const suspectName = "Dipesh"
const suspectAge = 20
console.log("suspect: ", suspectName, "| Age: ", suspectAge)

console.warn("warning: Fingerprint evedence detected")
console.error("warning: Fingerprint evedence detected")

const evidenceLog = [
  {id: 1, item: "Muddy footprint", location: "window sill" },
  {id: 2, item: "Broken glass", location: "Living room" },
  {id: 3, item: "Red Fibre strand", location: "Door Handle" },

];

console.table(evidenceLog)