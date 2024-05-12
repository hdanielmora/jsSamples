// performing a taks
function greet(paramaterOfaFunction, checkMemoryVariable) {
  console.log("Hello " + paramaterOfaFunction);
  checkMemoryVariable = "Scope Function";
  console.log(
    "checkMemoryVariable change inside function: " + checkMemoryVariable
  );
}

//Calculating
function square(number) {
  return number * number;
}

console.log("******************************");

let argumentOfaFunction = "Daniel";
let checkMemoryVariable = "I am outside function scope";
console.log(checkMemoryVariable);
greet(argumentOfaFunction, checkMemoryVariable);
console.log(checkMemoryVariable);

console.log(square(2));

console.log(
  "Primitive types are copy by value,  Object Type are  copy the memory reference location"
);

let listObject = { age: 10, firstName: "Daniel" };
let listObjectCopy = listObject;
console.log("listObject: ", listObject.firstName);
console.log("listObjectCopy: ", listObjectCopy.firstName);

console.log("Modify listObjectCopy: ");
listObjectCopy.firstName = "Salome";

console.log("listObject: ", listObject.firstName);
console.log("listObjectCopy: ", listObjectCopy.firstName);

let emailMessageSample = `Hi ${listObject.firstName}

This is a sample email
more stuff.

bla bla
`;

console.log(emailMessageSample);




