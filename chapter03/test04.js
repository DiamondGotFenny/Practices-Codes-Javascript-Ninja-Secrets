function report(text) {
  let elementUl = document.getElementById("first");
  let elementMsg = document.createElement("li");
  elementMsg.textContent = text;
  elementUl.appendChild(elementMsg);
}

function multiRest(firstPara, ...restPara) {
  let sortPara = restPara.sort((a, b) => b - a);
  return firstPara * sortPara[0];
}
console.assert(
  multiRest(3, 2, 3, 10, 21) === 63,
  report("3*21=63 (First arg, by largest.)")
);
