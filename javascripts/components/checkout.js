import collectMeats from './meats.js';
import collectVeggies from './veggies.js';
import collectCondiments from './condiments.js';
import collectCheese from './cheeses.js';
import util from './../helpers/util.js';
// import collectBread from './breads.js';

let basket = [];

//////// Building item elements /////////

// const getBread = () => {
  // const bread = document.querySelector('input[name = bread]:checked');
    // basket.push(collectBread.addBread(bread.id));
// };

const getMeat = () => {
  const meats = document.querySelectorAll('input[name = meat]:checked');
  meats.forEach((meat) => {
    basket.push(collectMeats.addMeat(meat.id));
  })
};

const getVeggies = () => {
  const veggies = document.querySelectorAll('input[name = veggie]:checked');
  veggies.forEach((veggies) => {
    basket.push(collectVeggies.addVeggies(veggies.id));
  })
};

const getCondiments = () => {
  const condiments = document.querySelectorAll('input[name = condiments]:checked');
  condiments.forEach((condiment) => {
    basket.push(collectCondiments.addCondiments(condiment.id));
  })
};

const getCheese = () => {
  const cheese = document.querySelectorAll('input[name = cheese]:checked');
  cheese.forEach((cheese) => {
    basket.push(collectCheese.addCheese(cheese.id));
  })
};


const makeSandwich = () => {
  const afterDamage = basket.reduce((a, b) => {return a + b.price}, 0);
  let sandString = '';
  sandString += '<div class="col-4 boxes">';
  sandString += '<table class="table">';
  sandString += '<thead class="thead-light">';
  sandString += '<tr>';
  sandString += '<th scope="col">Item</th>';
  sandString += '<th scope="col">Price</th>';
  sandString += '</tr>';
  sandString += '</thead>';
  sandString += '<tbody>';
  sandString += '<tr>';
  basket.forEach((item) => {
    sandString += `<td>${item.name}</td>`;
    sandString += `<td>$${item.price.toFixed(2)}</td>`;
    sandString += '</tr>';
  })
  sandString += '<tr>';
  sandString += `<td>$${afterDamage.toFixed(2)}</td>`;
  sandString += '</tr>';
  sandString += '</div">';
util.printToDom('finalOrder', sandString);
}

const sandwichItems = () => {
  basket = [];
  // getBread();
  getCheese();
  getMeat();
  getVeggies();
  getCondiments();
  makeSandwich();
}

export default { sandwichItems };
