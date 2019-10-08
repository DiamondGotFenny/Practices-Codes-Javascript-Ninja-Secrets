function report(text) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = text;
  elementUl.appendChild(elementMsg);
}

/* function argumentsTest(a, b, c) {
  console.assert(
    arguments.length === 5,
    report(`We’ve passed in ${arguments.length} parameters`)
  );
  console.assert(a === 1, report(`the value of a is 1`));
  console.assert(b === 2, report(`the value of b is 2`));
  console.assert(c === 3, report(`the value of c is 3`));
  console.assert(
    arguments[0] === a,
    report(`${a} The first argument is assigned to a`)
  );
  console.assert(
    arguments[1] === b,
    report(`${b} The second argument is assigned to b`)
  );
  console.assert(
    arguments[2] === c,
    report(`${c} The third argument is assigned to c`)
  );
  console.assert(
    arguments[3] === 4,
    report(` The forth argument ${arguments[3]} is assigned to d`)
  );
  console.assert(
    arguments[4] === 5,
    report(` The third argument ${arguments[4]} is assigned to e`)
  );
}

argumentsTest(1, 2, 3, 4, 5); */

/* function addArgs() {
  let sum = 0;
  for (let index = 0; index < arguments.length; index++) {
    sum += arguments[index];
  }
  return sum;
} */

/* function addArgs(first, ...rest) {
  let sum = rest.reduce((a, b) => a + b, first);
  return sum;
}

console.assert(addArgs(1, 2) === 3, report("We can add two numbers"));
console.assert(addArgs(1, 2, 3) === 6, report("We can add three numbers"));
console.assert(addArgs(1, 2, 3, 4) === 10, report("We can add four numbers")); */

/* function infiltered(person) {
  console.assert(
    person === "gardener",
    report(`the person is a ${person} or first argument ${arguments[0]}`)
  );
  arguments[0] = "ninja";
  console.assert(
    person === "ninja",
    report(`the person is a ${arguments[0]} or ${person}`)
  );
  person = "gardener";
  console.assert(
    person === "gardener",
    report(`the person is a ${person} or first argument ${arguments[0]} again`)
  );
}

infiltered("gardener"); */

function infiltrate(person) {
  console.assert(person === "gardener", report("The person is a gardener"));
  console.assert(
    arguments[0] === "gardener",
    report("The first argument is a gardener")
  );

  arguments[0] = "ninja";
  console.log(person);
  console.assert(
    arguments[0] === "ninja",
    report("The first argument is now a ninja")
  );
  console.assert(
    person === "gardener",
    report(`The person ${person} is still a gardener`)
  );
}
infiltrate("gardener");
