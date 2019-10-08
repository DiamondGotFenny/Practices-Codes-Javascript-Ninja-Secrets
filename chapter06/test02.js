function assert(evaluation, result) {
  if (evaluation === true) {
    let elementUl = document.getElementById("first");
    let elementMsg = document.createElement("li");
    elementMsg.textContent = result;
    elementUl.appendChild(elementMsg);
  }
}

function report(result) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = result;
  elementUl.appendChild(elementMsg);
}

function fail(error) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.style.color = "red";
  elementMsg.textContent = error;
  elementUl.appendChild(elementMsg);
}

function getRandomNum() {
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
}

/*const ninjaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let number = getRandomNum();
    if (number > 1) {
      resolve("we did it!");
    } else {
      reject("An error resolving a promise!");
    }
  }, 2000);
});

ninjaPromise.then(
  ninja => {
    assert(ninja === "we did it!", "Get Promise");
  },
  err => console.error(err)
); */

/* report("at code starts");

const soilderDelayPromise = new Promise((resolve, reject) => {
  report("soilderDelayPromise excutor start. Delay resolve");
  setTimeout(() => {
    report("resolving soilderDelayPromise");
    let number = getRandomNum();
    if (number > 1) {
      resolve("gun");
    } else {
      reject("we can not get GUN");
    }
  }, 2000);
});

assert(soilderDelayPromise !== null, "after creating soilderDelayPromise");

soilderDelayPromise
  .then(soilder => {
    assert(soilder === "gun", "soilderDelayPromise resolve handled with gun");
  })
  .catch(err => fail(err));

const soliderImmediatePromise = new Promise((resolve, reject) => {
  report("soliderImmediatePromise executor start. Immediate resolve.");
  let number = getRandomNum();
  if (number > 1) {
    resolve("sword");
  } else {
    reject("we can not get SWORD");
  }
});
soliderImmediatePromise
  .then(soilder => {
    assert(
      soilder === "sword",
      "soliderImmediatePromise resolve handled with sword"
    );
  })
  .catch(err => fail(err));

report("at code end"); */

function getJson(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      try {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(`${this.status} ${this.statusText}`);
        }
      } catch (error) {
        reject(error.message);
      }
    };
    request.onerror = function() {
      reject(`${this.status} ${this.statusText}`);
    };

    request.send();
  });
}

/* getJson("data/solider.json")
  .then(solider => {
    assert(solider !== null, "solider arrive");
  })
  .catch(e => fail("we can not get the solider!"));

getJson("data/solider.json")
  .then(solider => getJson(solider[0].missionsUrl))
  .then(missionsUrl => getJson(missionsUrl[0].detailsUrl))
  .then(mission => assert(mission !== null, "mission completed!"))
  .catch(e => fail("mission failed! " + e));

Promise.all([
  getJson("data/solider.json"),
  getJson("data/missionsUrl.json"),
  getJson("data/targetUrl.json")
])
  .then(results => {
    const solider = results[0],
      mission = results[1],
      target = results[2];

    assert(
      solider !== undefined && mission !== undefined && target !== undefined,
      "The plan is ready to be set in motion!"
    );
  })
  .catch(error => {
    fail("A problem in carrying out our plan!");
  });

Promise.race([
  getJson("data/solider.json"),
  getJson("data/missionsUrl.json"),
  getJson("data/targetUrl.json")
])
  .then(solider => {
    assert(solider !== null, solider[0].name + " responded first");
  })
  .catch(error => {
    fail("A problem in carrying out our plan!");
  }); */

/* 
//the theory behind async/await function
function asyncFunc(generator) {
  let iterator = generator();
  function handle(iteratorResults) {
    if (iteratorResults.done) {
      return;
    }
    const iteratorValue = iteratorResults.value;
    if (iteratorValue instanceof Promise) {
      iteratorValue
        .then(res => handle(iterator.next(res)))
        .catch(err => iterator.throw(err));
    }
  }

  try {
    handle(iterator.next());
  } catch (error) {
    iterator.throw(error);
  }
}

asyncFunc(function*() {
  try {
    const solider = yield getJson("data/solider.json"),
      missionsUrl = yield getJson(solider[0].missionsUrl),
      target = yield getJson(missionsUrl[0].detailsUrl);
    report(JSON.stringify(target));
  } catch (error) {
    fail("mission failed " + error);
  }
}); */

function getids() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getid");
      resolve([1, 2, 3]);
    }, 2000);
  });
}
function getRecipe01(ids) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getrecipe");
      resolve(`${ids[1]}: meat`);
    }, 1000);
  });
}

async function goon() {
  const ids = await getids();
  const recipe = await getRecipe01(ids);
  return recipe;
}

console.log("i get call");
const result = goon();
result
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));
