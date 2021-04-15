/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
//const rectsngleArea = (l, m) => l * m;

//console.log(rectsngleArea(2, 3));

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = (l, m) => {
  l === m ? console.log((l + m) * 3) : console.log(l + m);
};
//crazySum(2, 2);
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
/* const crazyDiff = (num) => {
  let Diff = num - 19;
  num > 19 ? console.log(Diff * 3) : console.log(Diff);
};
crazyDiff(20); */

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/*const boundary = (num) => {
  (num >= 20 && num <= 100) || num === 400
    ? console.log(true)
    : console.log(false);
};
boundary(101);*/
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/*const strivify = (str) => {
  let strive = 'Strive';
  str.indexOf(strive) === 0
    ? console.log(str)
    : console.log((str += ' ' + strive));
};
strivify(''); */
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
/*const check3and7 = (posNum) => {
  posNum < 0 ? console.log('Number is negative') : '';
  posNum % 3 === 0 ? console.log('multipe of 3') : '';
  posNum % 7 === 0 ? console.log('multipe of 7') : '';
};
check3and7(-14);*/
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/*const reverseString = (str) => {
  console.log(str.split('').reverse().join(''));
};
reverseString('wowa'); */
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/*const upperFirst = (str) => {
  console.log(str.charAt(0).toUpperCase() + str.slice(1));
};
upperFirst('gck');*/

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (str) => {
  console.log(str.slice(1, -1));
};
cutString('jfwerwj');
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
