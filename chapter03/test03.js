function report(text) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = text;
  elementUl.appendChild(elementMsg);
}

function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {};
  }
  if (isPrime.answers[value] !== undefined) {
    return isPrime.answers[value];
  }

  let prime = value !== 1;

  for (let index = 2; index < value; index++) {
    if (value % index === 0) {
      prime = false;
      break;
    }
  }
  return (isPrime.answers[value] = prime);
}

let inputval = 7;
console.assert(isPrime(inputval), report(`${inputval} is prime`));
console.assert(isPrime.answers[inputval], report(`${inputval} was cached!`));
