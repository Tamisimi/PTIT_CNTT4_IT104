let username: string = "John Doe";
let age: number = 25;
let job: string = "Developer";

function displayInfo(name: string, age: number, job: string): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayInfo(username, age, job);