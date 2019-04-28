import sandwich from './components/checkout.js';

document.getElementById('damage').addEventListener('click', sandwich.sandwichItems);

const init = () => {
  sandwich.sandwichItems();
}
init();
