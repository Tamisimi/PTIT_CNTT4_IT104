function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(item => item === value);
}

const numbers = [1, 3, 5, 7, 9, 2];
const result1 = findElement(numbers, 5);
console.log("Find 5 in", numbers, ":", result1);

const strings = ["apple", "banana", "cherry", "date"];
const result2 = findElement(strings, "cherry");
console.log("Find 'cherry' in", strings, ":", result2);

const result3 = findElement(strings, "grape");
console.log("Find 'grape' in", strings, ":", result3);