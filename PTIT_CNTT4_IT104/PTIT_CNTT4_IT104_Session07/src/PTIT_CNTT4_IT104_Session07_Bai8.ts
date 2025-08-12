class Account {
    public accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: number, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }

    deposit(amount: number): string {
        if (amount <= 0) {
            return "Số tiền nạp phải lớn hơn 0.";
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
        return `Nạp thành công ${amount}. Số dư mới: ${this.balance}`;
    }

    withdraw(amount: number): string {
        if (amount <= 0) {
            return "Số tiền rút phải lớn hơn 0.";
        }
        if (amount > this.balance) {
            return "Số dư không đủ.";
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        return `Rút thành công ${amount}. Số dư mới: ${this.balance}`;
    }

    showHistory(): string[] {
        return this.history;
    }
}

class CheckingAccount extends Account {
    public overdraftLimit: number;

    constructor(accountNumber: number, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): string {
        if (amount <= 0) {
            return "Số tiền rút phải lớn hơn 0.";
        }
        if (this.balance - amount < -this.overdraftLimit) {
            return `Không thể rút. Giới hạn thấu chi là ${this.overdraftLimit}.`;
        }
        this.balance -= amount;
        this.history.push(`Rút (Checking): -${amount} | Số dư: ${this.balance}`);
        return `Rút thành công ${amount}. Số dư mới: ${this.balance}`;
    }
}

const checkAcc = new CheckingAccount(2001, 1000, 500);

console.log(checkAcc.deposit(500));
console.log(checkAcc.withdraw(1200));
console.log(checkAcc.withdraw(1000));
console.log(checkAcc.withdraw(300));

console.log(checkAcc.showHistory());
