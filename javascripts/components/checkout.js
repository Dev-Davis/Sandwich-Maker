import meats from './meats.js';
import util from './../helpers/util.js';

let basket = [];

const getMeat = () => {
  const meats = document.querySelectorAll('input[name = meat]:checked');
  meats.forEach((meat) => {
    basket.push(meats.addMeat(meat.id));
  })
};

const makeSandwich = () => {
  const afterDamage = basket.reduce((a, b) => {return a + b.price}, 0);
  let sandString = '';
    basket.forEach((item) => {
    sandString += '<div class="col-4">';
    sandString += '<div>Ticket: </div>';
    sandString += '</div>';
    sandString += `<div> $${item.type}</div>`;  
  })
  
  util.printToDom('finalOrder', sandString);
}

const sandwichItems = () => {
  basket = [];
  getMeat();
  makeSandwich();
}

export default { sandwichItems };
