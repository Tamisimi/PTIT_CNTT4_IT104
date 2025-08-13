function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "Nguyen Van A", age: 25 };
const address = { city: "Hanoi", country: "Vietnam" };
const merged = mergeObjects(person, address);
console.log("Merged object:", merged);
