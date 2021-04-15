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
Create an array containing the first 5 positive numbers.
*/

let Array = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let Myself = {
  name: 'pheonix',
  surname: 'Dawg',
  email: 'Dawg@gmail.com',
  adress: 'universe 30 , planet 20',
  age: 3,
};
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.

*/
Myself = { ...Myself, drivinglicense: true };
//console.log(Myself);

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete Myself.age;
console.log(Myself);
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let otherPerson = {
  name: 'john',
  surname: 'Doe',
  email: 'Jhon@gmail.com',
  adress: 'universe 1 , planet 2',
};
console.log(Myself.email === otherPerson.email); //result false

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/* let totalShoppingCart = 51;
totalShoppingCart <= 50
  ? console.log((totalShoppingCart += 10))
  : console.log('you have free shipping');  */

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let totalShoppingCart = 20;
blackFriday = false;
totalShoppingCart <= 50
  ? console.log((totalShoppingCart += 10))
  : console.log('you have free shipping');
blackFriday ? console.log((totalShoppingCart * 20) / 100) : console.log('');
/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
  brand: 'toyota',
  model: '2018',
  licensePlate: 'DB1231',
};
let car2 = {
  brand: 'toyota',
  model: '2018',
  licensePlate: 'DB1431',
};
let car5 = {
  brand: 'toyota',
  model: '2018',
  licensePlate: '1231DB',
};
let car4 = {
  brand: 'toyota',
  model: '2018',
  licensePlate: '1239',
};
let car3 = {
  brand: 'toyota',
  model: '2018',
  licensePlate: 'AA1231',
};

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
let carsForRent = [car, car2, car3, car4, car5];
//console.log(carsForRent);
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carsForRent.pop();
carsForRent.shift();
//console.log(carsForRent);
/* WRITE YOUR CODE HERE */

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
console.log(typeof car); //object
console.log(typeof car.licensePlate); //string
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [car, car5, car4];
let totalCarsForSale;
let totalCarsForRent;
//console.log((totalCarsForSale = carsForSale.length));
//console.log((totalCarsForRent = carsForRent.length));

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

carsForSale.forEach((item) => console.log(item));

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
