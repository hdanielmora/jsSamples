// Encapsulation = Group relate variables and functions together Reduce complexity + Increase reusability
// Abstraction = Show only the essential hidden not need methods and variables. reduce complexity + Isolate impact changes
// Inheritance = Eliminate redundant code
// Polymorphism = Refactor

//3 Ways to create Objects

// 1. Object Literal is object does not have behaviors

console.log("************** OO ********************");
console.log("1. Create Object Literal is object does not have behaviors");

const circleObjecLiteral = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log(`Draw from Object Literal ${this.location.x}`);
  },
};

circleObjecLiteral.location.x = 2;
circleObjecLiteral.draw();

// 2.  Factory Function
console.log("2.  Create  Object with Factory Function");
function createCircle(radius, x, y) {
  return {
    radius,
    location: {
      x,
      y,
    },
    draw: function () {
      console.log(`Draw from Factory Function ${this.location.x}`);
    },
  };
}

const circleFactoryFunction = createCircle(1, 5, 5);
circleFactoryFunction.draw();
console.log(typeof circleFactoryFunction);

// 3. Constructor function
console.log("2.  Create  Object with Constructor function");
function Circle(radius, x, y) {
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.draw = function () {
    console.log(`Dram from Constructor function ${this.x}`);
  };
}

const constructedCircle = new Circle(1, 6, 6);
constructedCircle.draw();
console.log(typeof constructedCircle);

console.log(`Add New property newRandomProperty`);
constructedCircle.newRandomProperty = { random: 158979 };
console.log(constructedCircle.newRandomProperty.random);
console.log(constructedCircle);
// Delete Properties
console.log(`Delete  property newRandomProperty`);
// delete constructedCircle.newRandomProperty;
console.log(constructedCircle);

console.clear();
console.log("**** Object Information ****");
//Enumerate all members of an object
console.log("-->Enumerate all members of an object");
for (let key in constructedCircle) {
  console.log(key, constructedCircle[key]);
}
console.log("-->Enumerate all Keys of an object");
const keysMyObject = Object.keys(constructedCircle);
console.log(keysMyObject);
console.log("-->To check if there is a property or method us IN ");
if ("radius" in constructedCircle)
  console.log("-->Radius Key is in constructedCircle");

//console.clear();
console.group("test");
console.log("PROTOTYPES*****************");
console.groupEnd();

console.log("PROTOTYPES*****************");

console.clear();
// Async + Await + Fetch

// Promises

//  API Mock
const callApi = new Promise((resolve, reject) => {
  setTimeout(() => {
    var testInsideAPI = "100";
    if (testInsideAPI == "100") {
      resolve(testInsideAPI);
    } else {
      reject("Values not was 100");
    }
  }, 5000);
});


// Sample Promise Sample
callApi
  .then((name) => {
    console.warn("Call APi with Promise fulfilled: value " + name);
  })
  .catch((err) => {
    console.error("Call APi with Promise rejected", err);
  })
  .finally(() => console.log("Call APi with OK executed finally"));  


// ASYNC  Await Sample

  const getMyData = async () => {
    try {
      const callToApia = await callApi;
      console.log('Called API : value',callToApia);
    } catch (error) {
      console.error('Called API Error ',error);
    } finally {
      console.log("Finally");
    }
  
  };

  getMyData(); 