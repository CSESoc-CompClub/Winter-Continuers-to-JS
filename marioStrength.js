/*Your first array exercise!!

You have been given two arrays: one that corresponds to the names of each character, while the
other array contains information about their RESPECTIVE strength levels. For example, Toad
would directly correspond to a strength of 3. 

Your task:
    Find and print the characters with maximum and minimum strength
    in the form:
        Strongest: Princess Daisy, 9
        Weakest: Yoshi, 7 (if Yoshi comes first in the array, it will be printed first)
        Weakest: Mario, 7
    (these are only PLACEHOLDER names and values, your own solution will differ)
*/

const characters = ['Mario', 'Princess Peach', 'Toad', 'Princess Daisy', 'Luigi', 'Bowser'];
const strength = [6, 7, 3, 5, 7, 3];


function printMaxMin(characters, strength) {
    // TODO: Complete this function
    
    
    
    // nothing needs to be returned
}














// TEST CASES - you do NOT need to account for special cases not present in these tests
// e.g. empty arrays, instances when the strongest and the weakest are the same, etc.
console.log("Original arrays: \n['Mario', 'Princess Peach', 'Toad', 'Princess Daisy', 'Luigi', 'Bowser'] \n[6, 7, 3, 5, 7, 3]");
console.log("\nYour program's output: ")
printMaxMin(characters, strength);
console.log("\nExpected output: \nStrongest: Princess Peach, 7 \nStrongest: Luigi, 7 \nWeakest: Toad, 3 \nWeakest: Bowser, 3")

console.log("\nOriginal arrays: \n['Wario', 'Kamek', 'Baby Daisy'] \n[4, 2, 5]");
console.log("\nYour program's output: ")
printMaxMin(['Wario', 'Kamek', 'Baby Daisy'], [4, 2, 5]);
console.log("\nExpected output: \nStrongest: Baby Daisy, 5 \nWeakest: Kamek, 2")


console.log("\nOriginal arrays: \n['Toadette', 'Baby Luigi', 'Lakitu', 'Rosalina'] \n[2, 2, 4, 3]");
console.log("\nYour program's output: ")
printMaxMin(['Toadette', 'Baby Luigi', 'Lakitu', 'Rosalina'], [2, 2, 4, 3]);
console.log("\nExpected output: \nStrongest: Lakitu, 4 \nWeakest: Toadette, 2\nWeakest: Baby Luigi, 2");

