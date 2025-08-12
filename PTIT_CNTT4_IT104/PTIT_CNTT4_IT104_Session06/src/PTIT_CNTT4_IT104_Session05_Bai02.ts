abstract class Job {
    protected type: string;
    constructor(type: string) {
        this.type = type;
    }
    public printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }
    public abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
    private workingHour: number;
    constructor(type: string, workingHour: number) {
        super(type);
        this.workingHour = workingHour;
    }
    public calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    constructor(type: string) {
        super(type);
    }
    public calculateSalary(): number {
        return 10000000;
    }
}

const parttimeJob = new ParttimeJob("Công việc bán thời gian", 50);
const fulltimeJob = new FulltimeJob("Công việc toàn thời gian");

parttimeJob.printType();
console.log(`Lương: ${parttimeJob.calculateSalary()} VND`);

fulltimeJob.printType();
console.log(`Lương: ${fulltimeJob.calculateSalary()} VND`);