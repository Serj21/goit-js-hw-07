function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destrBtn = document.querySelector("button[data-destroy]");
const inputNum = document.querySelector("input[type=number]");
const createdBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxesOnClick);
destrBtn.addEventListener("click", destroyBoxesOnClick);

function createBoxesOnClick() {
  let inputValue = inputNum.value;

  if (inputValue < 1 || inputValue > 100) {
    return;
  }
  destroyBoxesOnClick();
  let boxArr = createBoxes(+inputValue);
  createdBoxes.prepend(...boxArr);
}

function createBoxes(amount) {
  const boxArr = [];
  let size = 24;
  for (let i = 1; i <= amount; i++) {
    size += 24;
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.height = `${size}px`;
    divBox.style.width = `${size}px`;
    boxArr.push(divBox);
  }
  return boxArr;
}

function destroyBoxesOnClick() {
  createdBoxes.innerHTML = "";
  inputNum.value = "";
}
