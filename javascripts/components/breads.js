
const breadInfo = {
    white: 1.00,
    wheat: 1.25,
    rosemary: 1.15,
    italian: 1.00,
    honeyOat: 1.15,
    roastedGarlic: 1.15
};

const addBread = () => {
    const plusBread = {
        name: bread,
        price: breadInfo[bread],
        type: 'bread'
    }
    return plusBread;
};

export default { addBread };
