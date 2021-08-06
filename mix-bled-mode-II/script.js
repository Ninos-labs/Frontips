const wrap = document.querySelector('.wrap');
const clip = document.querySelector('.clip');

//numbers of lines
let width = wrap.clientWidth;
let numItems = width / 10;

for (let i = 0; i < numItems; i++) {
  wrap.innerHTML += '<li></li>';
}

const moveClip = (e) => {
  let coordinatesX = e.clientX;
  let coordinatesY = e.clientY;

  clip.style.left = `${coordinatesX}px`;
  clip.style.top = `${coordinatesY}px`;
};

wrap.addEventListener('mousemove', moveClip);
