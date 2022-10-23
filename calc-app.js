window.addEventListener("DOMContentLoaded", init);
const options = [
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

const specials = ["/", "*", "+", "-"];

function init() {
  document.title = "Javascript Calculator";
  console.log("ready");
  let decimal = false;
  let evaluation = false;
  const container = document.createElement("div");
  container.classList.add("container");
  container.style.maxWidth = "600px";
  container.style.margin = "auto";
  document.body.appendChild(container);
  const output = document.createElement("input");
  output.setAttribute("type", "text");
  output.classList.add("output");
  output.style.width = "100%";
  output.style.lineHeight = "50px";
  output.style.fontSize = "3em";
  output.style.textAlign = "right";
  container.appendChild(output);
  const main = document.createElement("div");
  main.classList.add("main");
  main.style.width = "100%";
  container.appendChild(main);
  options.forEach(function (val) {
    buttonMaker(val, addOutput);
  });

  buttonMaker("=", evalOutput);
  buttonMaker("c", clrOutput);

  function colorOutput(v) {
    output.style.border = v + " 3px solid";
  }

  function evalOutput() {
    colorOutput("black");

    if (output.value === "") {
      colorOutput("red");
    } else if (evaluation) {
      colorOutput("red");
    } else {
      output.value = evaluation(output.value);
    }
  }

  function clrOutput() {
    output.value = "";
  }

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

  function addOutput(e) {
    console.log(decimal);
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
    evaluation = specials.includes(character);
    if (evaluation) {
      decimals = false;
    }
    output.value += character;
  }
}
