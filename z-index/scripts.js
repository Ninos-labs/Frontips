const toppingsBtn = document.querySelectorAll('.toppings-btn-wrap button');
const popsicle = document.querySelector('.popsicle');
const showBtn = document.querySelector('.btn-show');
const chocolate = document.querySelector('.topping-chocolate');
const cherry = document.querySelector('.topping-cherry');
const caramel = document.querySelector('.topping-caramel');

const addTopping = (e) => {
  const btn = e.target;
  const toppingSelected = document.querySelector(`.topping-${btn.dataset.topping}`);
  const toppings = document.querySelectorAll('.topping');
  toppings.forEach((t) => (t.style.zIndex = 2));
  toppingSelected.style.zIndex = 3;
};

toppingsBtn.forEach((btn) => {
  btn.addEventListener('click', addTopping);
});

const orderZindex = () => {
  cherry.style.zIndex = 1;
  caramel.style.zIndex = 2;
  chocolate.style.zIndex = 3;
};

const showLayers = () => {
  orderZindex();
  popsicle.classList.toggle('popsicle-open');
};

showBtn.addEventListener('click', showLayers);
