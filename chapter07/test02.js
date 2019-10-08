function assert(evaluation, result) {
  if (evaluation === true) {
    let elementUl = document.getElementById("testResult");
    let elementMsg = document.createElement("li");
    elementMsg.style.color = "green";
    elementMsg.textContent = result;
    elementUl.appendChild(elementMsg);
  } else {
    fail(result + " is false!");
  }
}

function report(result) {
  let elementUl = document.getElementById("testResult");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = result;
  elementUl.appendChild(elementMsg);
}

function fail(error) {
  let elementUl = document.getElementById("testResult");
  let elementMsg = document.createElement("li");
  elementMsg.style.color = "red";
  elementMsg.textContent = error;
  elementUl.appendChild(elementMsg);
}

/* function Solider() {
  Solider.prototype.swindSword = function() {
    return true;
  };
}

const solider1 = Solider();
//console.log(Solider.swindSword()); this will throw error because
//the prototype of a constructor is not the prototype of the Constructor itself
assert(solider1 === undefined, "No instance of Solider created.");

const solider2 = new Solider();
console.log(solider2);
assert(
  solider2 && solider2.swindSword && solider2.swindSword(),
  "Instance exists and method is callable."
); */

/* function Solider() {
  this.swung = false;
  this.swindSword = function() {
    return !this.swung;
  };
  Solider.prototype.swindSword = function() {
    return this.swung;
  };
}
const solider1 = new Solider();
assert(
  solider1.swindSword(),
  "Called the instance method, not the prototype method."
); */

/* function Solider() {
  this.run = true;
}

const solider1 = new Solider();
Solider.prototype.canRun = function() {
  return this.run;
};

assert(
  solider1.canRun(),
  "The solider1 can run! Method exists, even out of order."
);

Solider.prototype = {
  fly: function() {
    return true;
  }
};

assert(
  solider1.canRun(),
  "The solider1 still can run! Method exists, even the constructor function prototype is replaced."
);

const solider2 = new Solider();
assert(solider2.fly(), "Newly created solider2 can fly");
assert(solider2.canRun, "solider2 can run");
assert(solider1.fly, "solider1 can fly"); */

function Solider() {}
const solider1 = new Solider();

assert(typeof solider1 === "object", "The type of the instance is object.");
assert(solider1 instanceof Solider, "instanceof identifies the constructor.");
assert(
  solider1.constructor === Solider,
  "The ninja object was created by the Ninja function."
);

const solider2 = new solider1.constructor();
assert(solider2 instanceof Solider, "it is a Solilder");
assert(solider1 !== solider2, "they are not the same Solider!");
