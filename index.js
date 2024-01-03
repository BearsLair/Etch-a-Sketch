const container = document.querySelector("div.container");

let userInput = 100;

for (let i = 1; i <= userInput; i++) {
  console.log(userInput);
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let j = 1; j <= userInput; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.height = (1 / userInput) * 320 + "px";
    square.style.width = (1 / userInput) * 320 + "px";
    row.appendChild(square);
  }
}

let newColor = document.querySelectorAll(".square");

for (const color of newColor) {
  color.addEventListener("mouseover", () => {
    color.style.backgroundColor = "black";
  });
}
