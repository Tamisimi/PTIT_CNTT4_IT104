class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const vehicle = new Vehicle(1, "Civic", 2020, "Hondas");
vehicle.displayInfo();
