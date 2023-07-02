/*          THIS IS AN OPTIONAL CHALLENGE EXERCISE
            ONLY ATTEMPT/CONTINUE THIS IF YOU HAVE FINISHED PREVIOUS/FUTURE NON-CHALLENGE EXERCISES
            Do not worry if you cannot complete this

Given an array of random integers, print the length of the largest “mountain” - 
i.e. a subarray that has a length >= 3 and all of its elements follow these rules:

arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
i is some element somewhere in the middle of the subarray i.e. not at the start or end.

For example, if you had [0, 3, 2, 3, 4, 5, 4, 3, 2, 1, 9],
You would be returning 8 since the longest mountain is [2, 3, 4, 5, 4, 3, 2, 1].
*/

function mountain(array) {
    // TODO: COMPLETE THE FUNCTION


    // TODO: change this return statement to suit the exercise
    return -1;
}


// TEST CASES 
// you can add your own to account for other edge cases

console.log("\nOriginal array: \n[0, 3, 2, 3, 4, 5, 4, 3, 2, 1, 9]");
console.log("Expected output: 8");
console.log("Your program's output: " + mountain([0, 3, 2, 3, 4, 5, 4, 3, 2, 1, 9]));

console.log("\nOriginal array: \n[2, 2, 2]");
console.log("Expected output: 0");
console.log("Your program's output: " + mountain([2, 2, 2]));

console.log("\nOriginal array: \n[2, 1, 4, 7, 3, 2, 5]");
console.log("Expected output: 5");
console.log("Your program's output: " + mountain([2,1,4,7,3,2,5]));

console.log("\nOriginal array: \n[1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5]");
console.log("Expected output: 11");
console.log("Your program's output: " + mountain([1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5]));

console.log("\nOriginal array: \n[]");
console.log("Expected output: 0");
console.log("Your program's output: " + mountain([]));