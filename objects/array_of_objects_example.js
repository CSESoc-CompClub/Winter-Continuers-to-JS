const data = require("./demo_db_objects.json");

const cond1 = everyExample(data.characters);
console.log(cond1);

const cond2 = someExample(data.characters);
console.log(cond2);

const filtered = filterExample(data.characters);
console.log("New array of objects: ");
console.log(filtered);

const modified = forEachExample(data.characters);
console.log("New array of objects: ");
console.log(modified);

const sorted = sortExample(data.characters);
console.log("New array of objects: ");
console.log(sorted);

// ========== DO NOT CHANGE ANYTHING ABOVE THIS LINE ==========

function everyExample(characters) {
  // Checks if all characters are NOT light weight class.
  return characters.every(notLight);
}

function notLight(char) {
  return char.weightClass > 1;
}

function someExample(characters) {
  // Checks if any character is called Peach
  return characters.some(calledPeach);
}

function calledPeach(char) {
  return char.name === "Peach";
}

function filterExample(characters) {
  // Filter array ot only have heavy weight class characters
  return characters.filter(onlyHeavies);
}

function onlyHeavies(char) {
  return char.weightClass === 3;
}

function forEachExample(characters) {
  // Give all characters an epic gamer username
  characters.forEach(gamerUsername);
  return characters;
}

function gamerUsername(char) {
  char.name = "XxX_" + char.name + "_XxX";
}

function sortExample(characters) {
  // Sorts in ascending order of weights
  characters.sort(compareWeights);
  return characters;
}

function compareWeights(charA, charB) {
  return charA.weightClass - charB.weightClass;
}
