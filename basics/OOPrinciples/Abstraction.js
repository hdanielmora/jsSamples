function Circulo(radius) {
  this.radius = radius;

  //Is use let instead of this member become private
  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    computeLocation();
    console.log(`Draw a Circulo radius: ${radius}`);
  };

  //Is use let instead of this member become private
  let computeLocation = function () {
    console.log("compute Location");
  };

  // Get and set
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location params");
      defaultLocation = value;
    },
  });
}

const myCirculo = new Circulo(10);
