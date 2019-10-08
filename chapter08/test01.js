function assert(evaluation, result) {
  if (evaluation === true) {
    let elementUl = document.getElementById("testResult");
    let elementMsg = document.createElement("li");
    elementMsg.style.color = "blue";
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
  let level = 0;
  let getCount = 0;
  this.getLevel = () => {
    getCount++;
    report(`getting level ${getCount} times`);
    return level;
  };
  this.setLevel = value => {
    report(`Modifying Level property from:${level} to ${value}`);
    level = value;
  };
}

const solider = new Solider();
console.log(solider.level); //undefined
solider.setLevel(99);
assert(solider.getLevel() === 99, "our solider is at level99"); */

/* const soliderCollection = {
  soliders: ["John", "Ben", "Chris"],
  get firstSolider() {
    report(`get the first solider ${this.soliders[0]}`);
    return this.soliders[0];
  },
  set firstSolider(value) {
    report(`we reset first solider from ${this.soliders[0]} to ${value}`);
    return (this.soliders[0] = value);
  }
};

assert(soliderCollection.firstSolider === "John", "John is the first solider");

soliderCollection.firstSolider = "Harry";
assert(
  soliderCollection.firstSolider === "Harry" &&
    soliderCollection.soliders[0] === "Harry",
  "Harry now is the first solider"
); */

/* class SoliderCollection {
  constructor() {
    this.soliders = ["John", "Ben", "Chris"];
  }
  get firstSolider() {
    report(`get the first solider ${this.soliders[0]}`);
    return this.soliders[0];
  }
  set firstSolider(value) {
    report(`we reset first solider from ${this.soliders[0]} to ${value}`);
    return (this.soliders[0] = value);
  }
}

const solider = new SoliderCollection();
assert(solider.firstSolider === "John", "John is the first solider");

solider.firstSolider = "Harry";
assert(
  solider.firstSolider === "Harry" && solider.soliders[0] === "Harry",
  "Harry now is the first solider"
); */

/* function Solider() {
  let _skillLevel = 0;

  Object.defineProperty(this, "skillLevel", {
    get: () => {
      report("The get method is called");
      return _skillLevel;
    },
    set: value => {
      report("The set method is called");
      _skillLevel = value;
    }
  });
}

const solider = new Solider();
assert(
  typeof solider._skillLevel === "undefined",
  "we can not access to the private variable"
);
assert(solider.skillLevel === 0, "The getter works fine!");
solider.skillLevel = 10;
assert(solider.skillLevel === 10, '"The setter works fine!"'); */

/* function Solider() {
  let _skillLevel = 0;

  Object.defineProperty(this, "skillLevel", {
    get: () => _skillLevel,
    set: value => {
      if (!Number.isInteger(value)) {
        throw new TypeError("Skill level should be a number");
      }
      return (_skillLevel = value);
    }
  });
}

const solider = new Solider();
solider.skillLevel = 10;
assert(solider.skillLevel === 10, "The value was updated");
try {
  solider.skillLevel = 1.5;
} catch (error) {
  fail("Setting a non-integer value throws an exception");
} */

const shortGun = {
  name: "Leyman",
  clan: "Wechester",
  get fullTitle() {
    return `${this.name} ${this.clan}`;
  },
  set fullTitle(value) {
    const segment = value.split(" ");
    this.name = segment[0];
    this.clan = segment[1];
  }
};

assert(shortGun.name === "Leyman", `our short gun's name is Layman`);
assert(shortGun.clan === "Wechester", `our short gun's clan is Wechester`);
assert(
  shortGun.fullTitle === "Leyman Wechester",
  `our short gun's full name is Leyman Wechester`
);

shortGun.fullTitle = "Billy White";
assert(shortGun.name === "Billy", `our short gun's name is Billy`);
assert(shortGun.clan === "White", `our short gun's clan is White`);
assert(
  shortGun.fullTitle === "Billy White",
  `our short gun's full name is Billy White`
);
