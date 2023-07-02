/*************************************/
/*   COMP CLUB Winter School 2023    */
/*         Topic: Functions          */
/*  Some Mathsy Functions to Warm Up */
/*************************************/

/**
 * @param num1 
 * @param num2 
 * @returns the product of num1 and num2
 */
 function multiply(num1, num2) {
    // TODO
    // Replace me with your code
    return 1;
}

/**
 * @param num1 can be 0 or a positive / negative integer
 * @param num2 can be 0 or a positive / negative integer
 * @returns num1 ^ num2
 */
function power(num1, num2) {
    // TODO
    // Replace me with your code
    return 1;
}

/**
 * Count the factors of a number
 * @param num a positive integer
 * @returns the number of factors of a given number
 */
function countFactors(num) {
    // TODO
    // Replace me with your code
    return 1;
}

/**
 * Reverses a number
 * Example: reverse(1234) returns 4321
 * Example: reverse(-628) returns -826
 * @param num an integer without trailing zeroes
 * @returns reverse of num1
 * 🤔 Can you do this without converting `num` into a string?
 */
function reverse(num) {
    // TODO
    // Replace me with your code
    return 1;
}

/**
 * Note: A palindrome is a word/phrase that reads the same backwards and forwards. 
 * Example: racecar, civic
 * @param stringNum a string representation of a number
 * @returns the closest integer (not including itself) which is a palindrome. If there is a tie, 
 *          return the smaller one
 */
function nearestPalindrome(stringNum) {
    // TODO
    // Replace me with your code
    return ;
}

// ❗❗    DO NOT MODIFY    ❗❗
// ❗❗USED FOR TESTING CODE❗❗
function testCode(expected, actual) {
    if (expected !== actual) {
        console.log("\x1b[31m+----------- Test Failed -----------+\x1b[89m");
        console.log(`expected ${expected} but received ${actual}\n`);
    } else {
        console.log("\x1b[32m+----------- Test Passed -----------+\x1b[89m\n");
    }
    process.stdout.write("\x1b[0m\x1b[0m\r");
}

// Test your code here with various inputs! Add more if you like :))
console.log("Multiply Function Tests:");
testCode(2, multiply(2, 1));
testCode(-22, multiply(11, -2));
testCode(0, multiply(4, 0));
testCode(-100, multiply(-10, 10));

console.log("\nPower Function Tests:");
testCode(32, power(2, 5));
testCode((-1 / 216), power(-6, -3));
testCode(1, power(7, 0));
testCode(64, power(-8, 2));

console.log("\nFactor Function Tests:");
testCode(2, countFactors(7));
testCode(12, countFactors(60));
testCode(5, countFactors(81));

console.log("\nReverse Number Function Tests:");
testCode(9086, reverse(6809));
testCode(99, reverse(99));
testCode(-2125, reverse(-5212));
testCode(-773, reverse(-377));

console.log("\nNearest Palindrome Function Tests:");
testCode(12321, nearestPalindrome("12345"));
testCode(0, nearestPalindrome("1"));
testCode(55, nearestPalindrome("51"));
testCode(999, nearestPalindrome("1001"));
