class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }

    displayInfo(): void {
        console.log(`Vehicle: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}

const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Model 3", 2022, "Tesla");

vehicle1.displayInfo();
vehicle2.displayInfo();