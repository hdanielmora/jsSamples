console.log("Declaration Strings");
console.log("Hello Daniel");
let firstName = "Daniel Mora";
console.log("first_name");
console.log(firstName);
let firstNameDefault, lastNameDefault;

const _INTEREST_RATE = 0.3;
// interestRate = 1;
console.log(_INTEREST_RATE);
console.log("PRIMITIVES -->");

let age = 30;
let isOld = false;
let selectedColor = null;

console.log(
  "Dynamic Typing means and object can change its Type in runtime-->"
);
console.log(age);
console.log(typeof age);
age = "Twenty";
console.log(age);
console.log(typeof age);
console.log("References TYpes Object, Array , function -->");

// Object Literal use {}
let person = {
  firstName: "Daniel",
  age: 30,
  money: -3000,
};

console.log(typeof person);
console.log(person);
console.log(person.firstName);

//Dot Notation
person.age = 40;
//Braked notation
person["money"] = 1000;
console.log(person);

//Braked notation for dynamic assignations
let selectedProperty = "firstName";
console.log(person[selectedProperty]);

console.log("Arrays");
// Create arrays use []
selectedColor = ["red", "blue"];
selectedColor[2] = "green";
selectedColor[3] = 12345;
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(selectedColor[2]);
console.log(selectedColor[3]);

console.log("Number of elements: " + selectedColor.length);

