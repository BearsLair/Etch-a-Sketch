const container = document.querySelector("div.container");

for (let i = 1; i <= 32; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let j = 1; j <= 32; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
}

let newColor = document.querySelectorAll(".square");

for (const color of newColor) {
  color.addEventListener("mouseover", () => {
    color.style.backgroundColor = "black";
  });
}
