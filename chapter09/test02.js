/**********function for testing**************/
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

/**********function for testing**************/

/* const dictionary = {
  ja: {
    "Ninjas for hire": " レンタル用の忍者 "
  },
  zh: {
    "Ninjas for hire": " 忍者出租 "
  },
  ko: {
    "Ninjas for hire": " 고용 닌자 "
  }
};

assert(
  dictionary.ja["Ninjas for hire"] === " レンタル用の忍者 ",
  "We know how to say 'Ninjas for hire' in Japanese!"
);
assert(
  typeof dictionary.ja["constructor"] === "undefined",
  dictionary.ja["constructor"]
); //return function Object() { [native code] } , not undefined */

/* const firstElem = document.getElementById("firstElement");
const secondElem = document.getElementById("secondElement");

const map = [];

map[firstElem] = { data: "firstElement" };
assert(
  map[firstElem].data === "firstElement",
  "The first element is correctly mapped"
);

map[secondElem] = { data: "secondElement" };
assert(
  map[secondElem].data === "secondElement",
  "The second element is correctly mapped"
);

assert(
  map[firstElem].data === "firstElement",
  "The first element is correctly mapped"
); //now the firstElem is overriden by secondElement

report(map[firstElem].data); //output secondElement */

/* const warriorsMap = new Map();

const warrior1 = { name: "Juri" };
const warrior2 = { name: "Cammy" };
const warrior3 = { name: "Sakura" };

warriorsMap.set(warrior1, { skill: "Kick" });
warriorsMap.set(warrior2, { skill: "Punch" });

assert(warriorsMap.get(warrior1).skill === "Kick", "The first mapping works");
assert(warriorsMap.get(warrior2).skill === "Punch", "The second mapping works");

assert(warriorsMap.size === 2, "We've created two mappings");

assert(
  warriorsMap.has(warrior1) && warriorsMap.has(warrior2),
  "We have mappings for the first two warriors"
); //return false

warriorsMap.delete(warrior1);
assert(warriorsMap.has(warrior1), "We have mappings for the first warrior");
assert(warriorsMap.size === 1, "There's no first ninja mapping anymore!");

warriorsMap.clear();
assert(warriorsMap.size === 0, "All mappings have been cleared!"); */

/* const linkMap = new Map();

const currentLink = location.href;

const firstLink = new URL(currentLink);
const secondLink = new URL(currentLink);

linkMap.set(firstLink, { description: "firstLink" });
linkMap.set(secondLink, { description: "secondLink" });

assert(linkMap.get(firstLink).description === "firstLink", "firstLink mapping");
assert(
  linkMap.get(secondLink).description === "secondLink",
  "secondLink mapping"
);
assert(linkMap.size === 2, "we have 2 keys in map"); */

const directory = new Map();
directory.set("Yoshi", "+81 26 6462");
directory.set("Kuma", "+81 52 2378 6462");
directory.set("Hiro", "+81 76 277 46");

for (const item of directory) {
  report(`Key: ${item[0]}`);
  report(`Value: ${item[1]}`);
}

for (const key of directory.keys()) {
  report(`Key: ${key}`);
  report(`Value: ${directory.get(key)}`);
}

for (let value of directory.values()) {
  report(`Value: ${value}`);
}
