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

/* class Solider {
  constructor(name) {
    this.name = name;
  }
  swingSword() {
    return true;
  }
}

const solider = new Solider("Ben");

assert(solider instanceof Solider, "our solider is a Solider");
assert(solider.name === "Ben", "our solider has name Ben");
assert(solider.swingSword(), "solider can swing sword"); */

/* class Solider {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  swingSword() {
    return true;
  }
  static compareLevel(solider1, solider2) {
    return solider2.level - solider1.level;
  }
}

const solider1 = new Solider("Ben", 3);
const solider2 = new Solider("John", 4);
assert(
  "compareLevel" in solider1 || "compareLevel" in solider2,
  "solider can access compareLevel"
); //fail
assert(
  Solider.compareLevel(solider1, solider2) > 0,
  "only Solider class can do the comparison"
);
assert("swingSword" in Solider, "The Solider class cannot swing a sword"); //fail */

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    return true;
  }
}

class Solider extends Person {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }
  useWeapon() {
    return true;
  }
}

const person = new Person("Bob");

assert(person instanceof Person, "a person is a Person");
assert(person.walk(), "person can walk");
assert(person.name === "Bob", "person's name Bob");
assert(person instanceof Solider, "person is Solider"); //fail
assert("useWeapon" in person, "person can use weapon"); //fail

const solider = new Solider("John", "sword");
assert(solider instanceof Person, "solider is a Person");
assert(solider instanceof Solider, "a solider is a Solider");
assert(solider.name === "John", "solider's name is John");
assert(solider.walk(), "solider can walk");
assert(solider.useWeapon(), "solider can use weapon");
