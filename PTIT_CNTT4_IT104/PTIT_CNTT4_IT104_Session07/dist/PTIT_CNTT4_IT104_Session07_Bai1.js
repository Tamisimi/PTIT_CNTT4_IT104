class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    printInfo() {
        return `Name:${this.name}, Company:${this.company}, Phone:${this.phone}`;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        return `Name:${this.name}, Company:${this.company}, Phone:${this.getPhone()}, TeamSize${this.teamSize}`;
    }
}
const employee = new Employee("Bruh", "What", 123456789);
console.log(employee.printInfo());
const manager = new Manager("Bruh", "What", 123456789, 5);
console.log(manager.printInfo());
