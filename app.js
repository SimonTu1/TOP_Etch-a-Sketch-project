

// DOM selector
const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const resterBtn = document.querySelector(".restart");





// *******************function*****************

//making grid
function makeGrid(num) {
  removeGrid(container);

  for (let i = 0; i < num * num; i++) {
    container.style.gridTemplateColumns = `repeat(${num},1fr)`;
    container.style.gridTemplateRows = `repeat(${num},1fr)`;
    let newDiv = document.createElement("div");
    container.appendChild(newDiv);
    newDiv.style.cssText = `border: 1px solid black`;
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "black";
    });
  }
}
makeGrid(16);

//removing grid
function removeGrid() {
  while (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}


// *********************Button eventlistener***************

//input number to change grid
btn.addEventListener("click", () => {
  let size = parseInt(prompt("What number of square sides? 1 - 100"));
  if (size < 1 || size > 100 || isNaN(size)) {
    removeGrid();
    makeGrid(16);
    alert("Please enter a number between 1-100");
  } else {
      removeGrid();
      makeGrid(size);
  }
});

//reset button
resterBtn.addEventListener("click", () => {
  removeGrid();
  makeGrid(16);
})


