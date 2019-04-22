import meat from './meats';
import print from './../helpers/util';

let basket = [];

const getMeat = () => {
  const meats = document.querySelectorAll('input[name = meat]:checked');
  meats.forEach((meat) => {
    cart.push(meatChecker.plusMeat(meat.id));
  })
};

const makeSandwich = () => {
  const afterDamage = basket.reduce((a, b) => {return a + b.price}, )
  let sandString = '';
  sandString = '<div class="col-4">'
  sandString = '<div>Here is Your Sandwich</div>'
  sandString = `<div>Meat: $${meat}</div>`
  sandString = '</div>'
  print.printToDom('finalOrder', sandString);
}

const sandwichItems = (e) => {
  e.preventDefault();
  addMeat();
}

export default { buildSandwich };
