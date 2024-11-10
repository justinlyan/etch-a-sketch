const container = document.querySelector(".container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let numSquares = requestSquares();
  while (numSquares > 100) {
    numSquares = requestSquares();
  }

  container.innerHTML = '';
  makeGrid(numSquares);
});

const requestSquares = () => {
  return prompt("How many squares per side?");
}

const makeGrid = (numSquaresPerRow) => {
  for (let i = 0; i < numSquaresPerRow; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < numSquaresPerRow; i++) {
      let sideLength = 960 / numSquaresPerRow;
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add("square");
      square.style.height = sideLength + "px";
      square.style.width = sideLength + "px";
      row.appendChild(square);
  
      square.addEventListener("mouseover", (event) => {
        event.target.classList.add("hovered");
      })
    }
    container.appendChild(row);
  };
}

makeGrid(16);