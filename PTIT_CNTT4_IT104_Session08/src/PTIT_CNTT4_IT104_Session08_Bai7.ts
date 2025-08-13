function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((flat, subArray) => flat.concat(subArray), []);
}

const numbers = [[1, 2], [3, 4], [5, 6]];
const flattenedNumbers = flatten(numbers);
console.log("Input:", numbers);
console.log("Output:", flattenedNumbers);

const fruits = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
const flattenedFruits = flatten(fruits);
console.log("Input:", fruits);
console.log("Output:", flattenedFruits);