Function.prototype.inherits = function(SuperClass) {
  // function Surrogate() {};
  // Surrogate.prototype = SuperClass.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this;

  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
}

function MovingObject(directions) { 
  this.directions = directions;
  this.move = function() {
    console.log("I'm moving!!!!!!")
  }
}

MovingObject.prototype.move = function() {
  console.log("I'm moving!!!!!!");
}

function Ship() {}
Ship.inherits(MovingObject);

const ship = new Ship();
ship.move();

function Asteroid() {}
Asteroid.inherits(MovingObject);

const asteroid = new Asteroid();
asteroid.move();

