class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttimeJob = new ParttimeJob("Công việc bán thời gian", 50);
const fulltimeJob = new FulltimeJob("Công việc toàn thời gian");
parttimeJob.printType();
console.log(`Lương: ${parttimeJob.calculateSalary()} VND`);
fulltimeJob.printType();
console.log(`Lương: ${fulltimeJob.calculateSalary()} VND`);
