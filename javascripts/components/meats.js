
const meatInfo = {
    chicken: 1.25,
    ham: 1.00,
    salami: 1.00,
    beef: 1.00,
    bologna: 1.00,
    turkey: 1.00
};

const addMeat = (meat) => {
    const plusMeat = {
        name: meat,
        price: meatInfo[meat],
        type: 'meat'
    }
    return plusMeat;
};

export default { addMeat };