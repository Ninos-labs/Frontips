const button = document.querySelector('.btn');
const rocketSVG = document.querySelector('.rocket');

const getAnimation = () => {
  rocketSVG.classList.add('rocket-animation');

  setTimeout(() => {
    rocketSVG.classList.remove('rocket-animation');
  }, 4000)
}

button.addEventListener('click', getAnimation);
