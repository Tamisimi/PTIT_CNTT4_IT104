class Account {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount <= 0)
            return "Số tiền nạp phải lớn hơn 0.";
        this.balance += amount;
        this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
        return `Nạp thành công ${amount}. Số dư mới: ${this.balance}`;
    }
    withdraw(amount) {
        if (amount <= 0)
            return "Số tiền rút phải lớn hơn 0.";
        if (amount > this.balance)
            return "Số dư không đủ.";
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        return `Rút thành công ${amount}. Số dư mới: ${this.balance}`;
    }
    showHistory() {
        return this.history;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0)
            return "Số tiền rút phải lớn hơn 0.";
        if (this.balance - amount < -this.overdraftLimit)
            return `Không thể rút. Giới hạn thấu chi là ${this.overdraftLimit}.`;
        this.balance -= amount;
        this.history.push(`Rút (Thấu chi): -${amount} | Số dư: ${this.balance}`);
        return `Rút thành công ${amount}. Số dư mới: ${this.balance}`;
    }
}
const acc = new CheckingAccount(1001, 1000, 500);
console.log(acc.deposit(300));
console.log(acc.withdraw(1100));
console.log(acc.withdraw(800));
console.log(acc.showHistory());
