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

/* let obj = {
  prop1: 1,
  prop2: function() {},
  prop3: {}
};

obj.prop1 = 2;
obj.prop1 = [3];
report(obj.prop1);
delete obj.prop2;
console.log(obj);
obj.prop4 = "hello";
console.log(obj); */

const john = { punch: true };
const ben = { kick: true };
const david = { fire: true };

assert("punch" in john, "john can punch");
assert("kick" in john, "john can kick");
assert("fire" in john, "john can fire");

Object.setPrototypeOf(john, ben);
assert("kick" in john, "john can kick");
assert("fire" in ben, "ben can fire");
assert("punch" in ben, "ben can punch");

Object.setPrototypeOf(ben, david);
assert("fire" in john, "john can fire");
assert("fire" in ben, "ben can fire");
assert("kick" in david, "david can kick");
