//declarando
class User {}
//instancia de una clase
//const newUser = new User();

class user {
  //metodos
  greeting() {
    return "hello";
  }
}

const lalo = new user();
console.log(lalo.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor

class user {
  //constructor
  constructor() {
    console.log("Nuevo usuario");
  }
  greeting() {
    return "hello";
  }
}

const david = new user();

//this hace referencia al elemento padre que lo contiene

class user {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return "hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}
const ana = new user("Ana");
console.log(ana.greeting());

// setters getters

class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user("David", 15);
console.log(bebeloper1.uAge);
console.log((bebeloper1.uAge = 20));
