const user = { username: "lalo", age: 30, country: "MX" };
const { username, ...values } = user;
console.log(username);
console.log(values);
