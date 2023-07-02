
// You have been given an ordered array. When your number of steps is positive, you should
// shift everything to the right. 
// For example, [Yoshi, Bowser, Toad, Luigi, Princess Daisy] shifted two steps to the right
// should become [Luigi, Princess Daisy, Yoshi, Bowser, Toad]
// HINT: think about the slides we just went through
// Your code must work for any positive value of 'steps' e.g. steps = 6 AND steps = 4

const characters = ['Yoshi', 'Bowser', 'Toad', 'Luigi', 'Mario'];

// WRITE YOUR CODE IN THE FUNCTION
function circularShift(steps, array) {
    // TODO: COMPLETE THIS FUNCTION
    
    return array;
}

// WRITE YOUR CODE ABOVE THIS LINE



// TESTS - FEEL FREE TO ADD YOUR OWN, ESPECIALLY FOR THE CHALLENGE

console.log("Original array: \n['Yoshi', 'Bowser', 'Toad', 'Luigi', 'Mario']");
console.log("Array expected when shifted to the right by 3: \n['Toad', 'Luigi', 'Mario', 'Yoshi', 'Bowser']");
console.log("Your program's output: ")
console.log(circularShift(3, characters));


console.log("\n");
console.log('------Other tests to verify your program-------');
console.log("\n");

console.log("Original array: ['Green Shell', 'Star', 'Banana']");
console.log("Array expected when shifted to the right by 5: ['Star', 'Banana', 'Green Shell']");
console.log("Your program's output: ")
console.log(circularShift(5, ['Green Shell', 'Star', 'Banana']));

console.log("\n");
console.log("Original array: ['Mario Kart']");
console.log("Array expected when shifted to the right by 2: [Mario Kart]");
console.log("Your program's output: ")
console.log(circularShift(2, ['Mario Kart']));

console.log("\n");
console.log("Original array: ['Landship', 'Badwagon', 'Mini Beast', 'Standard Kart']");
console.log("Array expected when shifted to the right by 4: \n['Landship', 'Badwagon', 'Mini Beast', 'Standard Kart']");
console.log("Your program's output: ")
console.log(circularShift(4, ['Landship', 'Badwagon', 'Mini Beast', 'Standard Kart']));














