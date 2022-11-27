//arrays destructuring
let fruits = ["apple", "banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = { username: "Lalo", age: 30 };
let { username, age } = user;
console.log(username, user.age);

//spread operator

let person = { name: "Lalo", age: 30 };
let country = "MX";

let data = { id: 1, ...person, country };
console.log(data);

//rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);
