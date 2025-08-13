function reverseArray<T>(arr: T[]): T[] {
    return [...arr].reverse();
}

const numbers = [1, 2, 3];
const reversedNumbers = reverseArray(numbers);
console.log("Input:", numbers);
console.log("Output:", reversedNumbers);

const strings = ["a", "b", "c"];
const reversedStrings = reverseArray(strings);
console.log("Input:", strings);
console.log("Output:", reversedStrings);