var outerVal = "gun";
var laterFn;

function outerFn() {
  var innerVal = "hitman";

  function innterFn() {
    console.assert(outerVal === "gun", "cannot access to outter value");
    console.assert(innerVal === "hitman", "cannot access to inner value");
  }

  laterFn = innterFn;
}

outerFn();
laterFn();
