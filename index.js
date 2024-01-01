const container = document.querySelector("div.container");

for (let i = 1; i <= 256; i++) {
  const square = document.createElement("div");

  container.appendChild(square);
}

let newColor = document.querySelectorAll(".container > div");

for (const color of newColor) {
  color.addEventListener("mousedown", () => {
    color.style.backgroundColor = "black";
  });
}
