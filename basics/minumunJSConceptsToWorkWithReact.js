/**
 *
 * FUnctions
 */

// export default function name(params) {}
function name(params) {}

// Arrow Functions
// export const DoSomething = () => {
const DoSomething = () => {
  console.log("DoSomething Call");
};

// Sample Component
const MyComponent = () => {
  // It works in REACT
  // return <div></div>;
};

const MyComponentWithTernaryOperator = (age) => {
  // It works in REACT
  //return age > 10 ? <div>Display for Teen</div> : <div>Display For Kids</div>;
};

//Anonymous function
/*
<button
  onClick={() => {
    // call a function
    console.log();
    DoSomething();
  }}
></button>;

// Conditional Ternary operator
if (condition) {
} else {
}

*/

/**
 * OBJECTS
 */

// Objects
// Destructure Objects
let lastName = "Mora";

const customer = {
  nameCustomer: "Daniel",
  ageCustomer: 39,
  isMarried: true,
  lastName, // lastName=lastName This works since the property of the object has the same variable name
};

const { nameCustomer, ageCustomer, isMarried } = customer;
/**
 * is the same that
 * name = customer.name
 * age = customer.age
 * isMarried = customer.isMarried
 */

/* COPY and Object with Spread operator, it does not copy the memory reference */
const customer2 = { ...customer };
const customer3 = { ...customer, nameCustomer: "Jack" };
console.log(customer);
console.log(customer2);
console.log(customer3);
console.log("Customers after Spread operator");
customer2.lastName = "Valenzuela";
console.log(customer);
console.log(customer2);
console.log(customer3);

console.log("Adding to an array");
const nameList = ["Joel", "Juancho", "Danna"];
console.log(nameList);
const nameList2 = [...nameList, "Joel"];
console.log(nameList2);
nameList2[5] = "Sara";
console.log(nameList);
console.log(nameList2);

console.log(`Ternary Operator`);

age = 10;
let namePerson = age > 9 && "Teen";
console.log(`AgeGap ${namePerson}`);
age = 2;

// Condition ? valueIFTrue : ValueIfFalse
namePerson = age > 10 ? "Teen" : "kid";
console.log(`AgeGap ${namePerson}`);

/**
 * Arrays
 */

console.log("***************ARRAY ***************");

let listOfCustomers = ["Daniel", "Andrea", "Salome", "Juan"];
console.log(listOfCustomers);
//listOfCustomers.map
// Map Iterate all elements
listOfCustomers.map((valueArray) => {
  console.log("--- ", valueArray);
});

let newlistOfCustomers = listOfCustomers.map((valueArray) => {
  // return <h1>valueArray</h1> // Sample react
  return valueArray + " Value";
});

console.log("listOfCustomers new after map", newlistOfCustomers);
newlistOfCustomers[1] = "NEW NAME";

console.log(listOfCustomers);
console.log(newlistOfCustomers);

//listOfCustomers.filter
let listOfCustomersFiltered = listOfCustomers.filter((valueArray) => {
  return valueArray !== "Andrea";
});

console.log("listOfCustomersFiltered");
console.log(listOfCustomersFiltered);

//listOfCustomers.reduce all elements to ONE value.

let listOfSales = [10, 20, 30, 50, 60];
const salesSum = listOfSales.reduce((previousOrAcumulator, currentSale) => {
  return previousOrAcumulator + currentSale;
});
console.log(salesSum);


// Async + Await + Fetch

