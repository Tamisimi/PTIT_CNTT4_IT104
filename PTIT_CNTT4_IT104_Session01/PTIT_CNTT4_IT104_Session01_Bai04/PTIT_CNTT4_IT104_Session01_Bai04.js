const checkParity = num => {
    if (typeof num !== 'number' || isNaN(num)) {
        return `${num} is not a number`;
    }
    return num % 2 === 0 ? `${num} is an even number` : `${num} is odd`;
};

console.log(checkParity("a"));
console.log(checkParity(10));
console.log(checkParity(7));