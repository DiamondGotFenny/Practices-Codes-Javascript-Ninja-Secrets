function report(text) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = text;
  elementUl.appendChild(elementMsg);
}

//ternary implement
function default01(actor, action) {
  //const myAct = typeof action === "undefined" ? "skulking" : action;
  action === undefined ? (action = "skulking") : (action = action);
  return `${actor} ${action}`;
}

console.assert(
  default01("Fuma") === "Fuma skulking",
  report("default01 The default value is used for Fuma")
);

console.assert(
  default01("Yoshi") === "Yoshi skulking",
  report("default01 The default value is used for Yoshi")
);

console.assert(
  default01("Yagyu", "sneaking") === "Yagyu sneaking",
  report("default01 Yagyu can do whatever he pleases, even sneak!")
);

//or implement
function default02(actor, action) {
  const myAct = action || "skulking";
  return `${actor} ${myAct}`;
}
console.assert(
  default02("Fuma") === "Fuma skulking",
  report("default02 The default value is used for Fuma")
);

console.assert(
  default02("Yoshi") === "Yoshi skulking",
  report("default02 The default value is used for Yoshi")
);

console.assert(
  default02("Yagyu", "sneaking") === "Yagyu sneaking",
  report("default02 Yagyu can do whatever he pleases, even sneak!")
);

//default parameter implement
function default03(actor, action = "skulking") {
  return `${actor} ${action}`;
}

console.assert(
  default03("Fuma") === "Fuma skulking",
  report("default03 The default value is used for Fuma")
);

console.assert(
  default03("Yoshi") === "Yoshi skulking",
  report("default03 The default value is used for Yoshi")
);

console.assert(
  default03("Yagyu", "sneaking") === "Yagyu sneaking",
  report("default03 Yagyu can do whatever he pleases, even sneak!")
);

//reference previous parameters
function default04(actor, action = "skulking", message = `${actor} ${action}`) {
  return message;
}

console.assert(
  default04("Fuma") === "Fuma skulking",
  report("default04 The default value is used for Fuma")
);

console.assert(
  default04("Yoshi") === "Yoshi skulking",
  report("default04 The default value is used for Yoshi")
);

console.assert(
  default04("Yagyu", "sneaking") === "Yagyu sneaking",
  report("default04 Yagyu can do whatever he pleases, even sneak!")
);
