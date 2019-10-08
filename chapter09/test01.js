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

/* const soliders = ["Ben", "Ken", "Ryun"];
const warriors = new Array("Juri", "Chun-Li", "Cammy", "Sakura");

assert(soliders.length === 3, "There are three soliders");
assert(warriors.length === 4, "And only four warriors");

assert(soliders[0] === "Ben", "the first solider is Ben");
assert(
  warriors[warriors.length - 1] === "Sakura",
  "the last warrior is sakura"
);

assert(
  soliders[4] === undefined,
  "We get undefined if we try to access an out of bounds index"
);

soliders[4] = "Saga";
assert(soliders[4] === "Saga", "the 4th solider is saga");
assert(soliders.length === 5, "Arrays are automatically expanded");
assert(soliders[3] === undefined, "the unassigned element is undefined");

warriors.length = 3;
assert(
  warriors[3] === undefined,
  "There are only three warriors now, we lost sakura"
);

soliders.length = 6;
assert(
  soliders[soliders.length - 1] === undefined,
  "the last element is undefined if we dont assign value"
); */

/* const warriors = [];
warriors.push("Juri");
report(`warriors.length:${warriors.length}; warriors[0]:${warriors[0]}`);

warriors.push("Chun-Li");
report(`warriors.length:${warriors.length}; warriors[1]:${warriors[1]}`);

warriors.unshift("Laura");
report(`warriors.length:${warriors.length}; warriors[0]:${warriors[0]}`);
report(
  `warriors.length:${warriors.length}; warriors[warriors.length-1]:${
    warriors[warriors.length - 1]
  }`
);

const lastWarrior = warriors.pop();
report(`poped item ${lastWarrior}`);
report(`remainning warriors: ${warriors}`);

const firstWarrior = warriors.shift();
report(`poped item ${firstWarrior}`);
report(`remainning warriors: ${warriors}`); */

/* const warriors = ["Juri", "Chun-Li", "Cammy", "Sakura"];

delete warriors[2];
report(warriors);
assert(warriors.length === 4, "the length of warriors is still 4");
assert(warriors[3] === "Sakura", "the warriors[3] is still Sakura");
assert(warriors[2] === undefined, "We've simply created a hole"); */

/* const warriors = ["Juri", "Chun-Li", "Cammy", "Sakura"];

let removeWarrior = warriors.splice(2, 1); //remove item
report(`remove Warrior: ${removeWarrior}`);
report(`warriros.length: ${warriors.length}`);
report(`warriors[2]: ${warriors[2]}`);
report(`warriors ${warriors}`);

assert(
  warriors[1] === "Chun-Li",
  "the second warrior is Chun-Li before insert"
);
warriors.splice(1, 0, "Mika", "Kolin"); //insert items
report(`warriros.length: ${warriors.length}`);
report(`warriors ${warriors}`);
assert(warriors[1] === "Mika", "the second warrior is Mika after insert");
assert(warriors[3] === "Chun-Li", "the fourth warrior is Chun-Li after insert");

removeWarrior = warriors.splice(3, 1, "Menat"); //replace item
report(`removeWarrior: ${removeWarrior}`);
assert(warriors[3] === "Menat", "the fourth warrior is Menat now");

warriors.splice(1); //remove all items since start index
report(`warriors: ${warriors}`);
assert(warriors.length === 1, "remove all warriors after index 0"); */

/* const warriors = ["Juri", "Chun-Li", "Cammy", "Sakura"];

warriors.forEach(warrior => {
  assert(warrior !== null, warrior);
}); */

/* const ninjas = [
  { name: "Yagyu", weapon: "shuriken" },
  { name: "Yoshi", weapon: "katana" },
  { name: "Kuma", weapon: "wakizashi" }
];

const ninjasWeapons = [];

ninjas.forEach(ninja => {
  ninjasWeapons.push(ninja.weapon);
});

report(ninjasWeapons);

const ninjasWeapons2 = ninjas.map(ninja => ninja.weapon);

report(ninjasWeapons2); */

/* const ninjas = [
  { name: "Yagyu", weapon: "shuriken" },
  { name: "Yoshi" },
  { name: "Kuma", weapon: "wakizashi" },
  { name: "Wasabi", weapon: "spicy" }
];

const allNinjasArmed = ninjas.every(ninja => "weapon" in ninja);
const allNinjasNamed = ninjas.every(ninja => "name" in ninja);

assert(allNinjasArmed, "Every ninja has a weapon"); //false
assert(allNinjasNamed, "Every ninja has a name");

const someNinjasArmed = ninjas.some(ninja => "weapon" in ninja);
assert(someNinjasArmed, "But some ninjas are armed"); */

/* const ninjas = [
  { name: "Yagyu", weapon: "shuriken" },
  { name: "Yoshi" },
  { name: "Kuma", weapon: "wakizashi" },
  { name: "Wasabi", weapon: "spicy" }
];

//return the first element that satisfy the condition
const ninjaWithWakizashi = ninjas.find(ninja => ninja.weapon === "wakizashi");

assert(
  ninjaWithWakizashi.weapon === "wakizashi" &&
    ninjaWithWakizashi.name === "Kuma",
  "We find the ninja with wakizashi"
);

const ninjaWithKatana = ninjas.find(ninja => ninja.weapon === "katana"); //return undefined
assert(ninjaWithKatana === "katana", "We find the ninja with katana"); //false

const ninjasWithArmed = ninjas.filter(ninja => "weapon" in ninja);
ninjasWithArmed.map(ninja => report(ninja.name)); */

/* const ninjas = ["Yagyu", "Yoshi", "Kuma", "Yoshi"];

assert(ninjas.lastIndexOf("Yoshi") === 3, "we found a Yoshi in index 3");
assert(ninjas.indexOf("Yoshi") === 1, "we found a Yoshi in index 1 as well");

const yoshiIndex = ninjas.findIndex(ninja => ninja === "Yoshi");
assert(yoshiIndex === 1, "findIndex only return the first element"); */

/* const ninjas = [{ name: "Yoshi" }, { name: "Yagyu" }, { name: "Kuma" }];

ninjas.sort(function(ninja1, ninja2) {
  if (ninja1.name < ninja2.name) {
    return -1;
  }
  if (ninja1.name > ninja2.name) {
    return 1;
  }
  return 0;
});

ninjas.map(ninja => report(ninja.name));

const numbers = [1, 2, 3, 4];
const sumNum = numbers.reduce((aggr, num) => aggr + num, 0);

report(sumNum); */

const elems = {
  length: 0,
  add: function(elem) {
    Array.prototype.push.call(this, elem);
  },
  gather: function(id) {
    this.add(document.getElementById(id));
  },
  find: function(callback) {
    return Array.prototype.find.call(this, callback);
  }
};

elems.gather("first");
assert(
  elems.length === 1 && elems[0].nodeType === 1,
  "Verify that we have an element in our stash"
);
elems.gather("second");

assert(
  elems.length === 2 && elems[1].nodeType === 1,
  "Verify the other insertion"
);

const found = elems.find(elem => elem.id === "second");
assert(found && found.id === "second", "We've found our element");
