import meat from './meats.js';
import util from './../helpers/util.js';

const makeShop = () => {
    const meatInfo = meat.getMeats();

    let domString = `<h2>Select your meats</h2>`;
    domString += `<input type="checkbox" name="meat" id="chicken">`
    domString += `<label for="chicken"> &nbsp Chicken: </label>`
    domString += `<br>`
    domString += `<input type="checkbox" name="meat" id="ham">`
    domString += `<label for="ham"> &nbsp Ham: </label>`
    domString += `<br>`
    domString += `<input type="checkbox" name="meat" id="turkey">`
    domString += `<label for="turkey">  &nbsp Turkey: </label>`
    domString += `<br>`
    domString += `<input type="checkbox" name="meat" id="salami">`
    domString += `<label for="salami">  &nbsp Salami: </label>`
    domString += `<br>`
    domString += `<input type="checkbox" name="meat" id="bologna">`
    domString += `<label for="bologna"> &nbsp Bologna: </label>`
    domString += `<br>`

    util.printToDom('meats', domString)
};

export default { makeShop };