const data = require("./demo_db_objects.json");

const cond1 = everyExercise(data.tracks);
console.log(cond1);

const cond2 = someExercise(data.vehicles);
console.log(cond2);

const filtered = filterExercise(data.vehicles);
console.log("New array of objects: ");
console.log(filtered);

const modified = forEachExercise(data.tracks);
console.log("New array of objects: ");
console.log(modified);

const sorted = sortExercise(data.tracks);
console.log("New array of objects: ");
console.log(sorted);

const sortedChallenge = sortChallenge(data.vehicles);
console.log("New array of objects: ");
console.log(sortedChallenge);

// ========== DO NOT CHANGE ANYTHING ABOVE THIS LINE ==========

// Checks if the high score for every track is less than 2 minutes (120 seconds).
function everyExercise(tracks) {
  // TODO
  return false;
}

// Checks if there is a vehicle with a speed stat of 10.
function someExercise(vehicles) {
  // TODO
  return false;
}

// Find all vehicles with a speed greater than 7.
function filterExercise(vehicles) {
  // TODO
  return vehicles;
}

// Change each track high score to 90% of its current
// high score, rounded to an integer.
function forEachExercise(tracks) {
  // TODO
  return tracks;
}

// Sort the tracks in ascending order of high score.
function sortExercise(tracks) {
  // TODO
  return tracks;
}

// Challenge: Sort the vehicles by speed ascending, then acceleration
// ascending, then handling ascending, then offroad ascending,
// then name ascending.
function sortChallenge(vehicles) {
  // TODO
  return vehicles;
}
