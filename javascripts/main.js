import sandwich from './components/checkout';

document.getElementById('damage').addEventListener('click', sandwich.buildSandwich);

const init = () => {
  buildSandwich();
}
init();

