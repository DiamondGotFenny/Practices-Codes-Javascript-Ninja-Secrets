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

/* const emperor = { name: "Alex" };
const representative = new Proxy(emperor, {
  get: (target, key) => {
    report(`reading the ${key} from the ${target} throught proxy`);
    return key in target ? target[key] : "Don't bother the emperor!";
  },
  set: (target, key, value) => {
    report(`writing a ${key} througt proxy`);
    return (target[key] = value);
  }
});
assert(emperor.name === "Alex", "The emperor's name is Alex");
assert(
  representative.name === "Alex",
  "We can get the name property through a proxy"
);

assert(emperor.nickname === undefined, "The emperor doesn’t have a nickname");
assert(
  representative.nickname === "Don't bother the emperor!",
  "The proxy jumps in when we make inproper requests"
);

representative.nickname = "Sam";
assert(emperor.nickname === "Sam", "The emperor now has a nickname");
assert(
  representative.nickname === "Sam",
  "The nickname is also accessible through the proxy"
); */

/* function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, property) => {
      report(`Reading ${property} property`);
      return target[property];
    },
    set: (target, property, value) => {
      report(`Writing ${property} with ${value}`);
      return (target[property] = value);
    }
  });
}

let solider = { name: "John" };
solider = makeLoggable(solider);
assert(solider.name === "John", "Reading solider's name");
solider.weapon = "sword";
assert(solider.weapon === "sword", "Give solider a weapon"); */

/* function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime = new Proxy(isPrime, {
  apply: (target, thisArg, Arg) => {
    console.time("isPrime");
    const result = target.apply(thisArg, Arg);
    console.timeEnd("isPrime");
    return result;
  }
});

isPrime(1299827); */

/* function Folder() {
  return new Proxy(
    {},
    {
      get: (target, property) => {
        report(`Reading ${property}`);
        if (!target[property]) {
          target[property] = new Folder();
        }
        return target[property];
      }
    }
  );
}

const rootFolder = new Folder();

try {
  rootFolder.solidersFolder.firstSolider.soliderFile = "John.text";
} catch (error) {
  fail(error);
} */

function createNagativeArrayIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expecting an array!");
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, value) => {
      index = +index;
      return (target[index < 0 ? target.length + index : index] = value);
    }
  });
}

function measure(items) {
  const startTime = new Date().getTime();
  for (let i = 0; i < 500000; i++) {
    items[0] === "Homles";
    items[1] === "John";
    items[2] === "Ben";
  }
  return new Date().getTime() - startTime;
}

const soliders = ["Homles", "John", "Ben"];
const solidersProxy = createNagativeArrayIndex(soliders);
console.log(
  "Proxies are around",
  Math.round(measure(solidersProxy) / measure(soliders)),
  "times slower"
);

assert(
  soliders[0] === "Homles" && soliders[1] === "John" && soliders[2] === "Ben",
  "Array items accessed through positive indexes"
);

assert(
  solidersProxy[0] === "Homles" &&
    solidersProxy[1] === "John" &&
    solidersProxy[2] === "Ben",
  "Array items accessed through positive indexes on a proxy"
);

assert(
  typeof soliders[-1] === "undefined" &&
    typeof soliders[-2] === "undefined" &&
    typeof soliders[-3] === "undefined",
  "Items cannot be accessed through negative indexes on an array"
);

assert(
  solidersProxy[-1] === "Ben" &&
    solidersProxy[-2] === "John" &&
    solidersProxy[-3] === "Homles",
  "But they can be accessed through negative indexes"
);
solidersProxy[-1] = "Hachi";
assert(
  solidersProxy[-1] === "Hachi" && soliders[2] === "Hachi",
  "Items can be changed through negative indexes"
);
