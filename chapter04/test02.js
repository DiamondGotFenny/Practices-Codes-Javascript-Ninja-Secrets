function report(text) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = text;
  elementUl.appendChild(elementMsg);
}

/* function getMyContext() {
  return this;
}

console.assert(
  getMyContext() === window,
  report(`Function call on window: ${getMyContext()}`)
);

var getMyThis = getMyContext;
console.assert(
  getMyThis() === window,
  report(`Function expression call on window: ${getMyThis()}`)
);

var ninjaObj = {
  getMyThis: getMyContext
};

console.assert(
  ninjaObj.getMyThis() === ninjaObj,
  report(`getmythis call on ninjaObj: ${ninjaObj.getMyThis()}`)
); */

/* function getMyContext() {
  this.getMyThis = function() {
    return this;
  };
}

const ninjia1 = new getMyContext();
const ninjia2 = new getMyContext();

console.assert(
  ninjia1.getMyThis() === ninjia1,
  report("The 1st ninja is skulking")
);
console.assert(
  ninjia2.getMyThis() === ninjia2,
  report("The 2nd ninja is skulking")
);
 */

/* function Ninja() {
  this.skulking = function() {
    return this;
  };
  return 1;
}

console.assert(
  Ninja() === 1,
  report("Return value honored when not called as a constructor")
);

const ninja1 = new Ninja();

console.assert(
  typeof ninja1 === "object",
  report("Object returned when called as a constructor")
);
console.assert(
  typeof ninja1.skulking === "function",
  report("ninja object has a skulk method")
); */

/* var puppet = {
  rules: false
};

function Emperor() {
  this.rules = true;
  return puppet;
}
emperor = new Emperor();

console.assert(emperor === puppet, report("The emperor is merely a puppet!"));
console.assert(
  emperor.rules === false,
  report("The puppet does not know how to rule!")
);
 */

/* function Click() {
  this.clicked = false;
  let clickedNum = 0; //this variable will not be inherited to the instance
  this.clickBtn = function() {
    this.clicked = true;
    this.clickedNum = clickedNum++;  //this.clickedNum is a newly create property in clickBtn
    console.assert(
      this.clicked,
      report(`the button is clicked ${this.clickedNum} times`),
      "the button is not be clicked"
    );
  };
}

var button = new Click();
console.log(button);
var elem = document.getElementById("testbtn");
elem.addEventListener("click", button.clickBtn); */

/* function juggle() {
  let result = 0;
  for (let index = 0; index < arguments.length; index++) {
    result += arguments[index];
  }
  this.result = result;
}

const ninja1 = {};
const ninja2 = {};
juggle.apply(ninja1, [1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);
console.assert(
  ninja1.result === 10,
  `the ninja1 result is not correct! the result shoul be :${ninja1.result}`
);
console.assert(
  ninja2.result === 26,
  `the ninja2 result is not correct! the result shoul be :${ninja2.result}`
); */

/* function myForEach(list, callback) {
  for (let index = 0; index < list.length; index++) {
    callback.call(list[index], index);
  }
}

const weapons = [{ type: "gun" }, { type: "sword" }, { type: "knife" }];

myForEach(weapons, function(index) {
  console.assert(
    this === weapons[index],
    `didn't get the right value of weapin, it should be ${weapons[index].type}`
  );
}); */

/* function Click() {
  this.clicked = false;
  let clickedNum = 0;
  this.clickBtn = () => {
    this.clicked = true;
    this.clickedNum = clickedNum++;
    console.assert(
      button.clicked,
      report(`the button is clicked ${button.clickedNum} times`),
      "the button is not be clicked"
    );
  };
}

var button = new Click();
var elem = document.getElementById("testbtn");
elem.addEventListener("click", button.clickBtn); */

/* console.assert(this === window, `this is not the window object:${this}`);
let clickedNum = 0;
console.log(`global click number ${clickedNum}`);
const button = {
  clicked: false,
  clickedNum: 0,
  click: () => {
    this.clicked = true;
    this.clickedNum = 1;
    console.log(
      `this.click number ${this.clickedNum} window click num:${
        window.clickedNum
      } button click num ${clickedNum}`
    );
    console.assert(button.clicked, "the button is not clicked");
    console.assert(
      this === window,
      `this in click is not the window object:${this}`
    );
    console.assert(
      window.clicked,
      `the clicked is not stored in window:${window.clicked}`
    );
  }
};

var elem = document.getElementById("testbtn");
elem.addEventListener("click", button.click); */

/* const button = {
  clicked: false,
  clickedNum: 0,
  click: function() {
    this.clicked = true;
    this.clickedNum = 1;
    console.assert(button.click, "this button is not be clicked");
  }
};
var elem = document.getElementById("testbtn");
elem.addEventListener("click", button.click.bind(button));

const boundFunc = button.click.bind(button);
console.log(`boundFunc:${boundFunc}  button.click:${button.click}`);
console.assert(
  boundFunc != button.click,
  "Calling bind creates a completly new function"
); */

var ninja1 = {
  whoAmI: function() {
    return this;
  }
};

var ninja2 = {
  whoAmI: ninja1.whoAmI
};

var identification = ninja2.whoAmI;

console.assert(
  ninja1.whoAmI() === ninja1,
  `this ninja1 is not ninja1, it is ${ninja1.whoAmI}`
);
console.assert(
  ninja2.whoAmI() === ninja1,
  `this ninja2 is not ninja1, it is ${ninja2.whoAmI}`
);
console.assert(
  identification() === ninja2,
  `this identification is not ninja1, it is ${identification}`
);

console.assert(
  ninja1.whoAmI.call(ninja2) === ninja2,
  `this ninja1 is not ninja2, it is ${ninja1.whoAmI}`
);
