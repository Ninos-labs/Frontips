const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");
const colorCard = document.querySelector(".color-card");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const rbgColor = `rgb(${r},${g},${b})`;
  return rbgColor;
};

const setBackgrount = () => {
  const newColor = generateRandomColor();
  console.log(newColor);
  colorNumber.innerHTML = newColor;
  body.style.backgroundColor = newColor;
  colorCard.style.backgroundColor = newColor;
};

button.addEventListener("click", setBackgrount);
