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
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* there are datatypes 5 datatypes : Numbers ,Strings , boolean , Objects , Arrays.
-strings are always within quotes ex:'hello' , '3' , 'true'
-numbers are numbers but the different is for to know that is number and not a string is that its not written within quotes ex :3 , 234...
-booleans are only two : true , false and again the diffrence is they are between quotes 
-objects are collection of values of the same thing and its inside two curly braces so we dont have to keep repeating and writing a lot of vars
-arrays is a collection of data and its inside []
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
 
*/

/* imagine that the variables const ,let, var are like a box and what you put inside the box is what you write after the = and u usually name the box a close name to what u put inside so you remember
 */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.


*/

let sum = 12 + 20;
//console.log(sum);

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

//let x = 12;
/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = 'Jhon Doe';

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

//let sub = x - 12;
//console.log(sub);

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = 'jhon';
let name2 = 'Jhon';
//console.log(name1 === name2); //result false means they are diffrent
// but if i do:
//console.log(name1.toLowerCase() === name2.toLowerCase()); // result true

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/
/* let x = 3;
switch (x) {
  case 0:
    console.log('zero');
    break;
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  case 5:
    console.log('five');
    break;
  case 6:
    console.log('six');
    break;
  case 7:
    console.log('seven');
    break;
  case 8:
    console.log('eight');
    break;
  case 9:
    console.log('nine');
    break;
  case 10:
    console.log('ten');
    break;
  default:
    console.log("i don't know because the number is larger than ten or NaN");
    break;
}*/

let x = 4;
if (x === 10) {
  console.log('ten');
} else if (x === 0) {
  console.log('zero');
} else if (x === 1) {
  console.log('one');
} else if (x === 2) {
  console.log('two');
} else if (x === 3) {
  console.log('three');
} else if (x === 4) {
  console.log('four');
} else if (x === 5) {
  console.log('five');
} else if (x === 6) {
  console.log('sox');
} else if (x === 7) {
  console.log('seven');
} else if (x === 8) {
  console.log('eight');
} else if (x === 9) {
  console.log('nine');
} else {
  console.log('number is larger than ten or NaN');
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let number = 10;
//number >= 10? console.log('number is equal or less than ten'): console.log('number is more than ten');

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
