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

/* function Person() {}

Person.prototype.run = function() {};

function Solider() {}

Solider.prototype = { run: Person.prototype.run };

const solider1 = new Solider();
assert(
  solider1 instanceof Solider,
  "solider1 receives functionality from the Solider prototype"
);
assert(solider1 instanceof Person, "... and the Person prototype");
assert(solider1 instanceof Object, "... and the Object prototype");

Solider.prototype = new Person();
const solider2 = new Solider();
assert(
  solider2 instanceof Solider,
  "solider2 receives functionality from the Solider prototype"
);
assert(solider2 instanceof Person, "... and the Person prototype");
assert(solider2 instanceof Object, "... and the Object prototype");
assert(typeof solider2.run === "function", "....and can run");
 */

/* const solider = {};
solider.name = "Ben";
solider.weapon = "gun";

Object.defineProperty(solider, "run", {
  configurable: false,
  enumerable: false,
  value: true,
  writable: true
});

assert("run" in solider, "We can access the new property");

for (const prop in solider) {
  if (solider.hasOwnProperty(prop)) {
    assert(solider !== undefined, `An enumerated property: ${prop}`);
  }
} */

/* function Person() {}
Person.prototype.dance = function() {};
function Solider() {}

Solider.prototype = new Person();

Object.defineProperty(Solider.prototype, "constructor", {
  enumerable: false,
  value: Solider,
  writable: true
});

const solider = new Solider();

assert(
  solider.constructor === Solider,
  "we reset instance's constructor back to constructor"
);
for (const prop in Solider.prototype) {
  assert(prop === "dance", "The only enumerable property is dance!");
} */

/* function Person() {}
function Ninja() {}
Ninja.prototype = new Person();
const ninja = new Ninja();
assert(ninja instanceof Ninja, "Our ninja is a Ninja!");
assert(ninja instanceof Person, "A ninja is also a Person. "); */

function Solider() {}

const solider = new Solider();
assert(solider instanceof Solider, "solider is instance of Solider now");

Solider.prototype = {};
assert(solider instanceof Solider, "solider is still instance of Solider now");
