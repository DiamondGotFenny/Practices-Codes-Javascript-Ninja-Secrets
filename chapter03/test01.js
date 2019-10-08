function report(text) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = text;
  elementUl.appendChild(elementMsg);
}

var text = "dolra mingo";

report("Before defining functions");

function useless(ninjacallback) {
  report("In useless function");
  return ninjacallback();
}

/*  function getText() {
    report("In getText function");
    return text;
  } */

report("Before making all the calls");

/* console.assert(
    useless(getText) === text,
    report("The useless function works! " + text)
  ); */

console.assert(
  useless(() => text) === text,
  report("The useless function works! " + text)
);

report("After the calls have been made");
var values = [0, 3, 2, 5, 7, 4, 8, 1];
report(values);
values.sort((a, b) => a - b);
report(values);
values.sort((a, b) => b - a);
report(values);
