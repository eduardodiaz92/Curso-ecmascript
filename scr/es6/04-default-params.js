function newUser(name, age, country) {
  var name = name || "Lalo";
  var age = age || 30;
  var country = country || "Mx";
  console.log(name, age, country);
}
newUser();
newUser("Pedro", 15, "CO");

function newAdmin(name = "Lalo", age = 30, country = "CL") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Ana", 28, "PE");
