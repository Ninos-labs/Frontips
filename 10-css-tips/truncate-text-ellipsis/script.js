const wrapper = document.querySelector(".wrapper");
const textWidth = document.querySelector(".width-value");
const slider = document.querySelector("[type=range]");

// const text = document.querySelector(".truncate");

slider.addEventListener("input", (e) => {
  const value = `${e.target.value}px`;
  wrapper.style.width = value;
  textWidth.innerHTML = value;
});
textWidth.innerHTML = `${wrapper.clientWidth}px`;

// const textContent = text.textContent;

// const truncateString = (str, num) => {
//   if (str.length <= num) {
//     return str;
//   }
//   return `${str.slice(0, num)} ...`;
// };

// text.innerHTML = truncateString(textContent, 50);
