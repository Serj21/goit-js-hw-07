const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", greetName);
function greetName() {
  const trimmedName = nameInput.value.trim();
  nameOutput.textContent = trimmedName || "Anonymous";
}
