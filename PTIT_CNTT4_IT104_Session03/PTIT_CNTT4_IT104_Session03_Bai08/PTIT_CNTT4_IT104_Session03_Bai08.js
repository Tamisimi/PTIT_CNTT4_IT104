function convertToNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        const parsed = parseFloat(value);
        return isNaN(parsed) ? null : parsed;
    }
    return null;
}

function add(a, b) {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);

    if (numA === null || numB === null) {
        return "Invalid input: Parameters must be numbers or valid numeric strings";
    }

    return numA + numB;
}

function subtract(a, b) {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);

    if (numA === null || numB === null) {
        return "Invalid input: Parameters must be numbers or valid numeric strings";
    }

    return numA - numB;
}

function multiply(a, b) {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);

    if (numA === null || numB === null) {
        return "Invalid input: Parameters must be numbers or valid numeric strings";
    }

    return numA * numB;
}

function divide(a, b) {
    const numA = convertToNumber(a);
    const numB = convertToNumber(b);

    if (numA === null || numB === null) {
        return "Invalid input: Parameters must be numbers or valid numeric strings";
    }

    if (numB === 0) {
        return "Invalid input: Cannot divide by zero";
    }

    return numA / numB;
}