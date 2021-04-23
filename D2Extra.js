/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let array = [1, 5, 2, 3, 4, 0];
let reversedArray = array.reverse();
//console.log(reversedArray);

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let maxValue = Math.max(...array);
//console.log(maxValue);
/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

let minValue = Math.min(...array);
//console.log(minValue);

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
let evenNumber = array.filter((number) => number % 2 === 0);
console.log(evenNumber);

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

array = array.filter((number) => number % 2 === 1);
console.log(array);

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/
const removeVowels = (Str) => {
  let split = Str.split('');
  for (let i = 0; i < split.length; i++) {
    if (
      split[i] === 'a' ||
      split[i] === 'e' ||
      split[i] === 'u' ||
      split[i] === 'i' ||
      split[i] === 'o'
    ) {
      split[i] = '';
    }
  }
  console.log(split.join(''));
};
console.log(removeVowels('erqa werqerwe wer'));

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

array = array.map((num) => (num += 1));
//console.log(array);
/* EXERCISE 8 
Replace all the Str in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let newArray = ['sddug', 'uhwqew', 'qweewq'];
newArray = newArray.map((element) => element.length);
console.log(newArray);
/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
