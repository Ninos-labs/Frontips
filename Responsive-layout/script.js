const grid = document.querySelector('.grid');
const addCardButton = document.querySelector('.btn-add');
const removeCardButton = document.querySelector('.btn-remove');

const addCard = () => {
  const card = document.createElement('div');
  card.classList.add('card');
  grid.appendChild(card);
};

const removeCard = () => {
  const card = document.querySelector('.card');
  grid.removeChild(card);
};

addCardButton.addEventListener('click', addCard);
removeCardButton.addEventListener('click', removeCard);
