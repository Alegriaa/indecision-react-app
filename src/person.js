const isAdult = (num) => {
    if (num >= 18) {
        return true;
    }
    return false;

};


const canDrink = (num) => {
    if (num >= 21) {
        return true;
    }
    return false;

};

const isSenior = (num) => num >= 65;

export { isAdult, canDrink, isSenior as default };