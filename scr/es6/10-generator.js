function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["lalo", "pepe", "ana", "licha"]);
console.log(it.next().value); //lalo
console.log(it.next().value); //pepe
console.log(it.next().value); //ana
console.log(it.next().value); //licha
