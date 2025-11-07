// console.log("Hello, world!");
// function add(a,b) { return a + b; }

// console.log( add(a, b) );

// console.log(`My first number is ${a} and my added number is ${add(a, b)}`);

// let bool = 7>1;
// console.log(`Is 7 greater than 1? ${bool}`);
// console.log(typeof 1);

// // console.log(a); // ❌
// // console.log(b); // ❌
// console.log(c);

// var c = 3;

// let pen = {
//     price : 5,
// }

// let pencil = {
//     color : "brown",
//     __proto__ : pen,
// }
// console.log(pencil.price);

// console.log("number" + 1);
// let a = 123;
// console.log(a.toString() === "123");

// const arr = [];
// arr.push("1");
// arr.push("2");
// arr.unshift(0);
// arr.shift();
// console.log(arr);

// const coll = new Map();
// coll.set("name", "John");
// coll.set("age", 30);
// console.log(coll.get("name"));
// console.log(coll.has("age"));
// console.log(coll.size);

// console.log("hello");

// let names = ["john", "josh", "joe", "josh"];

// console.log(names.indexOf("josh"));
// console.log("test git");
// let result = "";
// let n = 0;
// do {
//   n++;
//   result += `${n}`;
// } while (n < 10);

// console.log(result);

// const myMap = new Map([
//   ["name", "john"],
//   ["age", 19],
// ]);
// for (const [key, value] of myMap) {
//   console.log(`${key}: ${value}`);
// }

// const object = { a: 1, b: 2, c: 3 };
// for (const propertie in object) {
//   console.log(`${propertie}: ${object[propertie]}`);
//}
//
/* let json = '{"name": "Alice"}';
try {
  let user = JSON.parse(json);
  if (!user.age) throw new SyntaxError("Incomplete data: no age");
  console.log(user.age);
  user.name;
} catch (e) {
  console.log("JSON error: " + e);
}
 *//* 

const cars = ["BWM", "TOYOTA", "HONDA"];
console.log(cars.map((car) => car.length));
let a = 100;
console.log(function(a) {
  return a + 100;
});
console.log((a) => a + 100);
console.log(a => a + 100);
// Traditional Function
function bob(a) {
  return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100; */

// ( myfucntion = (age =10) => {
//   console.log("My age is john " + "age: " + age);
// })();

// console.log(myfucntion(19));


// function myFunction(...Arr) { // Rest parameter
//   let total =0;
//   for (const arr of Arr){
//       total += arr;
//   }
//   return total;
// }

// console.log(myFunction(1,2,3,4,5));

// let a =1;
// {
//   let a =10;
//   console.log(a);
// }
// console.log(a);\

function myName(){
  return console.log("My name is panha. ");
}

function myNickname() {
  myName();
}

myName();
myNickname();