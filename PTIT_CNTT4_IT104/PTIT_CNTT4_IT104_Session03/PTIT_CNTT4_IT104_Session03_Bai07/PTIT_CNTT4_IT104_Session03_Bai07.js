let input = "banana";
let result = "";

for (let char of input) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);

input = "hello world";
result = "";

for (let char of input) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result);