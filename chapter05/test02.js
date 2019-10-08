/* function Gun() {
  var bullet = 0;
  this.getBullet = function() {
    return bullet;
  };

  this.fire = function() {
    bullet++;
  };
}

var gun1 = new Gun();
gun1.fire();
console.assert(
  gun1.bullet === undefined,
  "you can not access to bullet directly"
);
console.assert(
  gun1.getBullet() === 1,
  "but you can access to bullet via getBullet"
);

var gun2 = new Gun();
console.assert(
  gun2.getBullet() === 0,
  "but you can access to bullet via getBullet"
);
 */

function animateIt(elementId) {
  var elem = document.getElementById(elementId);
  var tick = 0;
  var id = 0;
  var timer = setInterval(function() {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + "px";
      tick++;
      id++;
    } else {
      clearInterval(timer);
      console.assert(tick === 100, "tick is not accessed via a closure.");
      console.assert(elem, "Element is not accessed via a closure.");
      console.assert(timer, "Timer reference is not obtained via a closure.");
    }
    console.log(id);
  }, 10);
}

animateIt("box1");
