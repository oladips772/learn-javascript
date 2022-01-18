/** @format */

// /** @format */
// let numbers = [1, 2, 4, 6, 11, 23, 12, 14, 56];
// function lessThanTen(number) {
//     return number < 10;
// }

// let numbersUnderTen = numbers.filter(lessThanTen)
// console.log(numbersUnderTen)

// const fruitsAndPrice = {
//     "apple": "10$",
//     "orange":"6$"
// }
// console.log(fruitsAndPrice.apple)

// let cars = ["rollsroyce", "benz", "maybach", "gla"];

// function printCars(car, inn) {
//   console.log(car, inn);
// }
// let allCars = cars.forEach(printCars);

// console.log(allCars);

// const newMachine = "Dell 24 inch monitor";
// console.log(newMachine.includes(24))

// const bones = ["ankle", "wrist", "toe", "foot"];
// console.log(bones.join(" " + "connected to" + " "))

// const Arrray = [
//     'cow',
//     'goat',
//     'dog',
//     'dog',
//     "cow"
// ]
//  console.log(Arrray.lastIndexOf("cow"))

// let value = [2, 5, 7, 88, 995, 55, 1, 23, 112, 33];
// let doubled = value.map((value) => value * 2)
// console.log(doubled)

// let data = [2, 3, 4, 5, 6, 7, 8, 55];
// let quotes = "Never say goodbye";
// let lastData = data.pop()
// console.log(lastData)
// let total = data.reduce((acc, curr) => acc + curr);
// console.log(total)
// data.push(10)
// console.log(data)

// quotes = quotes.replace("goodbye", "never");
// console.log(quotes)

// data.reverse()
// console.log(data)
// console.log(data.shift())
// console.log(data);

// console.log(data);
// console.log(data.unshift(1))
// console.log(data);

// console.log(data.splice(1, 4, "7777"));

// // AND gates (&&) only
// console.log(0 && 1) //false (0)
// console.log(1 && 0); // false (0)
// console.log(1 && 1); //true (1)
// console.log(0 && 0); // false (0)
// console.log(true && false); // false
// console.log(false && true); //false
// console.log(true && true); //true
// console.log(false && false); //false

// // OR gates (||) only
// console.log(0 || 1); // true (1)
// console.log(1 || 0); // true (1)
// console.log(1 || 1); // true (1)
// console.log(0 || 0); // false (0)
// console.log(true || false); // true (1)
// console.log(false || true); // true (1)
// console.log(true || true); // true (1)
// console.log(false || false); // false (0)

// data.includes(55)
//   ? console.log("yes it includes 55")
//   : console.log("no it does not include 55");

// let newData = [12, 34, 29, ...data]
// console.log(newData)

/////// NEW LESSON BELLOW ///////

// const GRB = document.querySelector(".greetButton");

// GRB.onclick = () => {
//   let userName = prompt("what is your name");
//   if (userName) {
//     alert("hello welcome" + " " + userName);
//     console.log("hello welcome" + " " + userName);
//   }
// };

// let numbers = [1, 2, 3, 55, 66, 77, 88, , 999, 222, 331, , 3, 90];

// console.log(numbers.sort((a, b) => b - a));  // sort in descending order
// console.log(numbers.sort((a, b) => a - b));  // sort in ascednig oder

// let newNumbers = new Array() || [];
// for (i = 0; i <= 10; i++) {
//   newNumbers.push(i);
// }
// console.log(newNumbers);

// let student = {
//   id: 1,
//   name: "dipo",
//   age: 22,
//   studentInfo: ((sss) =>sss.name + "\n" + sss.age) || function(){ return this.name + "\n" + this.age},
// };
// console.log(student.studentInfo(student));

/// switch statement

// switch (1) {
//   case 0:
//     text = "weekend";
//     break;
//   case 5:
//     text = "weekend";
//     break;
//   case 6:
//     text = "weekend";
//     break;
//   default:
//     text = "weekday";
// }
// console.log(text);

// json lessononclick="ageInDays()"
//   [
//     {
//       "name":"oladips",
//       "age":12,
//       "height":120
//     },
//     {
//       "name":"korede",
//       "age":16,
//       "height":110
//     }
//   ]
// `;

// console.log(JSON.parse(students));

// function greetMe() {
//   let user = prompt("what is your name");
//   if (user) {
//     alert("hello welcome" + " " + user)
//   }
// }

// if statement

// let nepa = false;

// if (nepa) {
//   console.log("iron cloths");
// } else {
//   console.log("cant iron clothes");
// }

//// arrays

// const Animals = [
//   "horse",
//   "cow",
//   "goat",
//   "dog",
//   "dog",
//   "cow",
//   "lion",
//   "wolf",
//   "snake",
// ];
// console.log(Animals);
// Animals.pop()
// console.log(Animals);
// Animals.push("horse")
// console.log(Animals);

/// shift and unshift
// console.log(Animals);
// console.log(Animals.shift());
// console.log(Animals);
// Animals.unshift("bird")
// console.log(Animals);

// slice methods
// let domesticAnimals = Animals.slice(0,6)
// console.log(domesticAnimals);
// let wildAnimals = Animals.slice(6, 9)
// console.log(wildAnimals);

////splice methods
// console.log(Animals);
// console.log(Animals.splice(3,2,"chicken"));
// Animals.splice(3, 2, "chicken")
// console.log(Animals);

// let numbers = [1, 2, 999, 3, 55, 66, 77, 88, 222, 331, , 3, 90];
// console.log(numbers);
// numbers.sort((a, b) => a - b); // ascsending order
// console.log(numbers);
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const numBer = document.querySelector(".addNum");
// let newNum = 0
// function AddUp() {
//   numBer.innerHTML = newNum;
//   newNum = newNum-1
//   numBer.innerHTML = newNum
// }

// switch (0) {
//   case 0:
//     text = "weekend";
//     break;
//   case 5:
//     text = "weekend";
//     break;
//   case 6:
//     text = "weekend";
//     break;
//   default:
//     text = "weekday";
// }
// console.log(text);

// function getAge() {
//   let age = prompt("what year were you were");
//   let ageInDays = (2022 - age) * 365;
//   let h1 = document.createElement("h1");
//   let text = document.createTextNode(
// "you are" + " " + ageInDays + " " + "days old";
//   );
//   h1.setAttribute("id", "ageAnswer");
//   h1.appendChild(text);
// document.getElementById("text").appendChild(h1);
// }

// function reset() {
// document.getElementById("ageAnswer").remove();
// }

function get_Age() {
  let age = prompt("what year were you born?");
  let ageValue = (2022 - age) * 365;
  let h1 = document.createElement("h1");
  let text = document.createTextNode(`you are ${ageValue} days old`);
  h1.setAttribute("id", "ageAnswer");
  h1.appendChild(text);
  document.getElementById("text").appendChild(h1);
}

function reset_Age() {
  document.getElementById("ageAnswer").remove();
}

