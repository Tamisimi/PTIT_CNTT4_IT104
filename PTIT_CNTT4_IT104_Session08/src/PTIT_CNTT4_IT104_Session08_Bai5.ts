function findFirstEven<T>(arr: T[]): T | undefined {
    return arr.find(item => Number(item) % 2 === 0);
}

const numbers1 = [1, 3, 4, 5, 6];
const result1 = findFirstEven(numbers1);
console.log("First even number in", numbers1, "is:", result1);

const numbers2 = [1, 3, 5, 7];
const result2 = findFirstEven(numbers2);
console.log("First even number in", numbers2, "is:", result2);