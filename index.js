const container = document.querySelector("div.container");

let row;

let userInput = 16;
drawGrid(userInput);
applyColor();

function drawGrid(userInput) {
  for (let i = 1; i <= userInput; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 1; j <= userInput; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.height = (1 / userInput) * 500 + "px";
      square.style.width = (1 / userInput) * 500 + "px";
      row.appendChild(square);
    }
  }
}

function applyColor() {
  let newColor = document.querySelectorAll(".square");

  for (const color of newColor) {
    color.addEventListener("mouseover", () => {
      color.style.backgroundColor = "black";
    });
  }
}

size = document.querySelector("#sizeBtn");

size.addEventListener("click", () => {
  let newSize = document.querySelector("#userInput").value;

  if (newSize < 16 || newSize > 100) {
    alert("Please choose a number from 16 to 100.");
  } else {
    let userInput = newSize;

    document.querySelectorAll(".row").forEach((row) => row.remove());

    console.log(userInput);

    drawGrid(userInput);
    applyColor();

    document.querySelector("#userInput").value = "";
  }
});
