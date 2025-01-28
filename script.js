const display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = new Function(`return ${display.value}`)();
  } catch (e) {
    display.value = "Error";
  }
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

document.addEventListener("keydown", (e) => {
  const key = e.key;
  switch (key) {
    case "Enter":
      e.stopPropagation();
      calculate();
      break;

    case "Escape":
      e.stopPropagation();
      clearDisplay();
      break;

    case "Backspace":
      e.stopPropagation();
      deleteLastChar();
      break;

    default:
      e.stopPropagation();
      const numbers = "0123456789";
      const operators = "*-/+";
      if (numbers.includes(key) || operators.includes(key))
        appendToDisplay(key);
      break;
  }
});
