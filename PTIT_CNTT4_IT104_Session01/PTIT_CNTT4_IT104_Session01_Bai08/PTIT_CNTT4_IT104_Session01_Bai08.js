const insertArray = (arr1, arr2, position) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "One or both inputs are not arrays";
    }
    if (!Number.isInteger(position) || position < 0 || position > arr1.length) {
        return "Invalid position";
    }
    const result = [...arr1.slice(0, position), ...arr2, ...arr1.slice(position)];
    return result;
};

console.log(insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3));
console.log(insertArray(['a', 'b', 'e', 'f'], ['c', 'd'], 2));
console.log(insertArray([1, 2, 3], [4, 5], -1));
console.log(insertArray("not an array", [1, 2], 1)); 