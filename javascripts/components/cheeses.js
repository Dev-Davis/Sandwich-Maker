const cheeseInfo = {
    american: 0.50,
    cheddar: 0.50,
    swiss: 0.50,
    pepperJack: 0.70,
    provolone: 0.50
}

const addCheese = (cheese) => {
    const plusCheese = {
        name: cheese,
        price: cheeseInfo[cheese],
        type: 'cheese'
    }
    return plusCheese;
}

export default { addCheese };