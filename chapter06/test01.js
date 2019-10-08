/* function* weapons() {
  yield "gun";
  yield "knifes";
  yield "blade";
}

for (const weapon of weapons()) {
  console.log(weapon);
} */

/* function* weapons() {
  console.log("state start");
  yield "gun";
  console.log("reach gun already");
  yield "knifes";
  console.log("reach knife already");
  yield "blade";
  console.log("we done");
}
const weaponIterator = weapons(); //output nothing
const result1 = weaponIterator.next(); //output "state start"
console.log(result1.value); //output "gun"
const result2 = weaponIterator.next(); //output "reach gun already"
console.log(result2.value); //output "knifes"
const result3 = weaponIterator.next();
console.log(result3.value);
const result4 = weaponIterator.next();
console.log(result4.value); */

/* function* weapons() {
  yield "gun";
  yield "knifes";
}

const weaponIterator = weapons(); */
/*const result1 = weaponIterator.next();
const result2 = weaponIterator.next();
const result3 = weaponIterator.next();
function operation(result) {
  if (!result.done) {
    console.log(
      `type of result  ${typeof result}, result value is ${result.value}`
    );
  } else {
    console.log(`there is no more result,result value is ${result.value}`);
  }
}
operation(result1);
operation(result2);
operation(result3); */

/* let item;

while (!(item = weaponIterator.next()).done) {
  console.log(item.value);
} */

/* function* weapons() {
  yield "gun";
  yield* blades();
  yield "knife";
}

function* blades() {
  yield "Normal Blade";
  yield "Tanto";
}

for (const iterator of weapons()) {
  console.log(iterator);
} */

/* function* IdGernerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idIterator = IdGernerator();

const fighter1 = { id: idIterator.next().value };
const fighter2 = { id: idIterator.next().value };
const fighter3 = { id: idIterator.next().value };

console.log(fighter1.id);
console.log(fighter2.id);
console.log(fighter3.id); */

/* function traverseDOM(element, callback) {
  callback(element);
  element = element.firstElementChild;
  while (element) {
    traverseDOM(element, callback);
    element = element.nextElementSibling;
  }
}

const subTree = document.getElementById("subTree");
traverseDOM(subTree, function(element) {
  if (element !== null) {
    console.log(element.nodeName);
  }
}); */

/* function* traverseDOM_Gen(element) {
  yield element;
  element = element.firstElementChild;
  while (element) {
    yield* traverseDOM_Gen(element);
    element = element.nextElementSibling;
  }
}
const subTree = document.getElementById("subTree");
for (let element of traverseDOM_Gen(subTree)) {
  if (element !== null) {
    console.log(element.nodeName);
  }
} */

/* function* NinjaGenerator(action) {
  const imposter = yield `Jonh ${action}`;
  console.log(imposter);
  if (imposter === "Ben") {
    console.log("the generator has been infiltrated");
  }

  yield `Chris(${imposter}) ${action}`;
}

const ninjaIerator = NinjaGenerator("skulk");
const result1 = ninjaIerator.next();
if (result1.value === "Jonh skulk") {
  console.log("Jonh is skulking");
}

const result2 = ninjaIerator.next("Ben");
if (result2.value === "Chris(Ben) skulk") {
  console.log("we have an imposter");
} */

/* function* NinjiGenerator() {
  try {
    yield "John";
    Console.log("The expected exception didn't occur");
  } catch (e) {
    if (e === "Catch this") {
      console.log("Aha! We caught an exception");
    }
  }
}

const ninjaIerator = NinjiGenerator();
const result1 = ninjaIerator.next();
if (result1.value === "John") {
  console.log("We got John");
}

ninjaIerator.throw("Catch this"); */

/* function* soldier(action) {
  yield `Ben is ${action}`;
  return `John is ${action}`;
}

const soldierIterator = soldier("firing"); //Notice! we are done executing soldier here! it
// is popped off from the execution context, even none of its code is executed.
//but the soldier execution context will not be discarded
//the soldierIterator object still keep a reference to the soldier function

const result1 = soldierIterator.next(); //here we push the soldier execution context
//back to the stack
//we suspend the soldier execution context and pop it off from the stack,
//after we rturn the value to result 1;
//we resume it till the next() get called

const result2 = soldierIterator.next();
console.log(result1.value);
console.log(result2.value); */
