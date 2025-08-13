function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person = { name: "Nguyen Van A", age: 25 };
const address = { city: "Hanoi", country: "Vietnam" };
const merged = mergeObjects(person, address);

console.log("Merged object:", merged);