/* const weapon = "gun";

try {
  weapon = "sword";
} catch (error) {
  console.error(`${error} you can not reassign const`);
  console.log(weapon);
}

const newWeapon = {};

newWeapon.coldWeapon = "knife";
console.log(newWeapon.coldWeapon);

const weaponPack = [];
weaponPack.push("Blade");
console.log(weaponPack[0]);
 */

/* var name = "Ben";

function action() {
  var doing = " walking";
  for (var index = 0; index < 3; index++) {
    var eventFor = name + doing;
    console.assert(eventFor === "Ben walking", "Ben is not walking");
    console.log(index + " current loop counts");
  }
  console.assert(
    index === 3 && eventFor === "Ben walking",
    "they can not access to for loop"
  );
} */

/* const NAME = "Ben";

function action() {
  const DOING = " walking";
  for (let index = 0; index < 3; index++) {
    let eventFor = NAME + DOING;
    console.assert(eventFor === "Ben walking", "Ben is not walking");
    console.log(index + " current loop counts");
  }

  try {
    console.assert(
      index === 3 && eventFor === "Ben walking",
      `they can access to for loop`
    );
  } catch (error) {
    console.error(error + " index & eventFor are undefined");
  }
}

action(); */

/* console.assert(typeof fun === "function", "this function is not defined yet");

try {
  console.assert(
    typeof funExprs === "function",
    "express function need to be defined before use it"
  );
} catch (error) {
  console.error(error + " express function need to be defined before use it");
}

try {
  console.assert(
    typeof funArrow === "function",
    "arrow function need to be defined before use it"
  );
} catch (error) {
  console.error(error + " arrow function need to be defined before use it");
}

function fun() {}

const funExprs = function() {};

const funArrow = () => {}; */

/* console.assert(typeof fun === "function", "this function is not defined yet");

var fun = 3;

console.assert(typeof fun === "number", "fun is not a number");

function fun() {}

console.assert(typeof fun === "number", "fun is not a number still"); */

/* function Gun() {
  var bullets = 0;
  this.getBullets = function() {
    return bullets;
  };
  this.addBullet = function() {
    bullets++;
  };
}

gun1 = new Gun();

var imposter = {};
imposter.getBullets = gun1.getBullets; 
console.log(imposter.getBullets());
gun1.addBullet();
console.log(imposter.getBullets()); */

/* function animateIt(id, num) {
  var elem = document.getElementById(id);
  var ticker = 0;
  var id = num;
  var timer = setInterval(function() {
    if (ticker < 100) {
      elem.style.left = elem.style.top = ticker + "px";
      ticker++;
      id++;
    } else {
      clearInterval(timer);
      console.assert(ticker === 100, "we can not access to ticker");
      console.assert(elem, "we can not access to elem");
      console.assert(timer, "we can not access to timer");
      console.log(id);
    }
    console.log(id);
  }, 10);
}

animateIt("box1", 0);
animateIt("box2", 100); */

/* function Samurai(name) {
  var weapon = "katana";
  this.getWeapon = function() {
    //accesses the local variable: weapon
    return weapon;
  };
  this.getName = function() {
    //accesses the function parameter: name
    return name;
  };
  this.message = name + " wielding a " + weapon;
  this.getMessage = function() {
    //this.message is not accessed through a closure
    //it is an object property (and not a variable)
    console.log(this.message);
    return this.message;
  };
}
var samurai = new Samurai("Hattori");
samurai.getWeapon();
samurai.getName();
samurai.getMessage(); */
