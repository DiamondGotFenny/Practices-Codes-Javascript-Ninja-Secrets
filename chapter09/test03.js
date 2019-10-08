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

/* function mySet() {
  this.data = {};
  this.length = 0;
}

mySet.prototype.has = function(item) {
  return typeof this.data[item] !== "undefined";
};

mySet.prototype.add = function(item) {
  if (!this.has(item)) {
    this.data[item] = true;
    this.length++;
  }
};

mySet.prototype.remove = function(item) {
  if (this.has(item)) {
    delete this.data[item];
    this.length--;
  }
};

const newSet = new mySet();
newSet.add("Harrigan");
newSet.add("Harrigan");

assert(newSet.length === 1, "we can only add Harrigan once"); */

const mySet = new Set(["Kuma", "Hattori", "Yagyu", "Hattori"]);

assert(mySet.has("Hattori"), "Hattori in mySet");
assert(mySet.size === 3, "there is only one Hattori in mySet");

mySet.add("Yoshi");
assert(mySet.has("Yoshi"), "we can add new item to Myset");
assert(mySet.size === 4, "now there is 4 items in myset");

mySet.add("Yoshi");
assert(
  mySet.size === 4,
  "we can not add same item to the set there is still 4 items in myset"
);

for (const item of mySet) {
  report(item);
}
