let screen = document.querySelector("#actual");
let historyScreen = document.querySelector("#history");
let subtract = document.querySelector("#subtract");
let addition = document.querySelector("#addition");
let multiply = document.querySelector("#multiply");
let division = document.querySelector("#division");
let equal = document.querySelector("#equal");
let numbers = "";
let history = "";
let result = "";
let calcStored = "";
let a;
let b;

document
  .querySelector("body")
  .addEventListener("keydown", function verifyKeyPressed({ key }) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const operations = ["-", "+", "*", "/"];

    if (numbers.includes(key)) numberPressed(key);
    else if (operations.includes(key) && subtract.disabled == false)
      calcPressed(key);
    else if (key == "Enter" && equal.disabled == false) {
      resultPressed();
    } else if (key == "Backspace") {
        backspacePressed();
      }
  });

function numberPressed(nmbr) {
  let tamanhoMax = 14;

  for (let L of numbers) {
    if (L == "1") {
      tamanhoMax = tamanhoMax + 0.5;
    }
  }

  tamanhoMax = Math.ceil(tamanhoMax);

  if (numbers.length != tamanhoMax) {
    if (nmbr == "." && numbers.length == 0) {
      numbers += "0" + nmbr;
      history += "0" + nmbr;
      return screenNumberUpdate(numbers);
    } else if (nmbr == "." && numbers.includes(".")) {
      return;
    }
    numbers += nmbr;
    history += nmbr;
    screenNumberUpdate(numbers);
  }
}

function calcPressed(calc) {
  a = parseFloat(numbers);
  history = history + `${calc}`;
  historyScreen.innerText = history;

  equal.disabled = false;
  buttonDisabled("y");

  if (calc == "+") {
    calcStored = "+";
  } else if (calc == "-") {
    calcStored = "-";
  } else if (calc == "/") {
    calcStored = "/";
  } else if (calc == "*") {
    calcStored = "*";
  }
  clearScreen();
}

function buttonDisabled(disableOrNo) {
  if (disableOrNo == "y") {
    subtract.disabled = true;
    addition.disabled = true;
    multiply.disabled = true;
    division.disabled = true;
  } else {
    subtract.disabled = false;
    addition.disabled = false;
    multiply.disabled = false;
    division.disabled = false;
  }
}

function backspacePressed() {
    if (!(numbers.length == 0)) {
    numbers = numbers.substring(0, (numbers.length - 1));
    history = history.substring(0, (history.length -1))
    screenNumberUpdate(numbers);
    } else {
        return;
    }
}

function resultPressed() {
  if (numbers != "") {
    b = parseFloat(numbers);
    calculate();
    equal.disabled = true;
  }
}

function calculate() {
  historyScreen.innerText = history + "=";
  numbers = "";

  if (isNaN(a)) {
    a = result;
  }

  if (calcStored == "+") {
    result = a + b;
  } else if (calcStored == "-") {
    result = a - b;
  } else if (calcStored == "/") {
    if (b == 0) {
      screen.innerText = "INDEFINIDA.";
      setTimeout(() => {
        clearPressed();
      }, 2200);
      return;
    }
    result = a / b;
  } else if (calcStored == "*") {
    result = a * b;
  }

  if (result.toString().length > 14) {
    result = result.toExponential(3);
  }

  buttonDisabled("no");
  screenNumberUpdate(result);
}

function screenNumberUpdate(nmbr) {
  screen.innerText = nmbr;
}

function clearScreen() {
  screen.innerText = "";
  numbers = "";
}

function clearPressed() {
  a = 0;
  b = 0;
  history = "";
  clearScreen();
  buttonDisabled("no");
  historyScreen.innerText = "";
}
