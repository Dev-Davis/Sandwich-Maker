const veggiesInfo = {
    lettuce: 0.00,
    onions: 0.00,
    tomatoes: 0.00,
    pickles: 0.00,
    jalapenos: 0.00,
    bananaPeppers: 0.00,
    spinach: 0.00
};

const addVeggies = (veggie) => {
    const plusVeggies = {
        name: veggie,
        price: veggiesInfo[veggie],
        type: 'veggie'
    }
    return plusVeggies;
};

export default { addVeggies };
