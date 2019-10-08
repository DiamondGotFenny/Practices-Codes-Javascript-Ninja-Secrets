/* var wieldSword = function() {};
wieldSword.swordType = "katana";
console.log(wieldSword.swordType);
 */
function report(text) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = text;
  elementUl.appendChild(elementMsg);
}

var storeFunction = {
  nextID: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextID++;

      this.cache[fn.id] = fn;
      return true;
    }
  }
};

function storedFn() {}

console.assert(
  storeFunction.add(storedFn),
  report("Function was safely added.")
);
console.assert(
  !storeFunction.add(storedFn),
  report("But it was only added once.")
);

console.log(storeFunction.cache);
