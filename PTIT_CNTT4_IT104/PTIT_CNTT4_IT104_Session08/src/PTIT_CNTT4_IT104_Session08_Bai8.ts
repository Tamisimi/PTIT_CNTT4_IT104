function partialUpdate<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}

const person1 = { name: 'Alice', age: 30, job: 'Developer' };
const updatedPerson1 = partialUpdate(person1, { age: 31 });
console.log("Input:", person1);
console.log("Output:", updatedPerson1);

const person2 = { name: 'Alice', age: 30, job: 'Developer' };
const updatedPerson2 = partialUpdate(person2, { name: 'Bob', job: 'Designer' });
console.log("Input:", person2);
console.log("Output:", updatedPerson2);