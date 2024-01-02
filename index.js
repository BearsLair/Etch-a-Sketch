const container = document.querySelector("div.container");

for (let i = 1; i <= 16; i++) {
  const square = document.createElement("div");
  square.classList.add("row");
  container.appendChild(square);
  for (let j = 1; j <= 16 - 1; j++) {
    const square = document.createElement("div");
    square.classList.add("column");
    container.appendChild(square);
  }
}

// let newColor = document.querySelectorAll(".container > div");

// // for (const color of newColor) {
// //   color.addEventListener("mouseover", () => {
// //     color.style.backgroundColor = "black";
// //   });
// // };
