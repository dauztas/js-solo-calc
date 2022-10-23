//Solely Javascript calculator

window.addEventListener("DOMContentLoaded", init); // Eventlistener to fire off whenever the html document has loaded and parsed.

// Keys array.
const optionalKeys = [
  "/",
  "*",
  "+",
  "-",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  "."
];

// Special keys array.
const specialKeys = ["/", "*", "+", "-"];

// Main function
function init() {
  console.log("Ready");
  document.title = "Javascript Calculator";
  alert("WELCOME \nJavascript Calculator is ready to be used"); // Greeting alert.
  let decimal = false;
  let evaluation = false;
  const container = document.createElement("div"); //
  container.classList.add("container");
  container.style.maxWidth = "600px";
  container.style.margin = "auto";
  document.body.appendChild(container); // Creating, styling and appending container div to the body element.
  const output = document.createElement("input"); //
  output.setAttribute("type", "text");
  output.classList.add("output");
  output.style.width = "100%";
  output.style.lineHeight = "50px";
  output.style.fontSize = "3em";
  output.style.textAlign = "right";
  container.appendChild(output); // Creating an input element, giving it styling, giving it a class and appending to the previously created container element.
  const main = document.createElement("div"); //
  main.classList.add("main");
  main.style.width = "100%";
  container.appendChild(main); // Creating, styling, adding a class and appending main div to the previously created container element.
  optionalKeys.forEach(function (val) {
    buttonMaker(val, addOutput);
  });

  buttonMaker("=", evalOutput);
  buttonMaker("c", clrOutput);

  // Function to color the output border on error or not.
  function colorOutput(v) {
    output.style.border = v + " 3px solid";
  }

  function evalOutput() {
    colorOutput("black");

    if (output.value === "") {
      colorOutput("red");
    } else if (evaluation) {
      colorOutput("red");
      alert(
        "Input has to end with a number before pressing the equality button"
      );
    } else {
      output.value = evaluation(output.value);
    }
  }

  // Function to clear the output.
  function clrOutput() {
    output.value = "";
  }

  // Button making function
  function buttonMaker(txt, myFunction) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.style.width = "23%";
    button.style.lineHeight = "50px";
    button.style.margin = "1%";
    button.style.fontSize = "2em";
    button.val = txt;
    button.textContent = txt;
    button.addEventListener("click", myFunction);
    main.appendChild(button);
  }

  // Func to make sure decimals doesnt have decimals in them.

  function addOutput(e) {
    colorOutput("black");
    let character = e.target.val;

    if (character == ".") {
      if (decimal) {
        character = "";
        colorOutput("red");
      } else {
        decimal = true;
      }
    }
    evaluation = specialKeys.includes(character);
    if (evaluation) {
      decimals = false;
    }
    output.value += character;
  }
}
