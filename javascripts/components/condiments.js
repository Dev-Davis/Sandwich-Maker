
const condimentsInfo = {
    mayo: 0.00,
    mustard: 0.00,
    honeyMustard: 0.00,
    ranch: 0.00,
    chipotle: 0.00,
    sweetOnion: 0.00
};

const addCondiments = (condiments) => {
    console.error(condiments);
    const plusCondiments = {
        name: condiments,
        price: condimentsInfo[condiments],
        type: 'condiments'
    }
    return plusCondiments;
};

export default { addCondiments };