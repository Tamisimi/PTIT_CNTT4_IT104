class Account {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount <= 0) {
            return "Số tiền nạp phải lớn hơn 0.";
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
        return `Nạp thành công ${amount}. Số dư mới: ${this.balance}`;
    }
    withdraw(amount) {
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
    showHistory() {
        return this.history;
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount <= 0) {
            return "Số tiền rút phải lớn hơn 0.";
        }
        if (amount > this.balance) {
            return "Không thể rút quá số dư hiện tại.";
        }
        this.balance -= amount;
        this.history.push(`Rút (Saving): -${amount} | Số dư: ${this.balance}`);
        return `Rút thành công ${amount}. Số dư mới: ${this.balance}`;
    }
}
// Test
const savingAcc = new SavingAccount(1001, 5000, 0.05);
console.log(savingAcc.deposit(2000));
console.log(savingAcc.withdraw(3000));
console.log(savingAcc.withdraw(5000));
console.log(savingAcc.withdraw(4000));
console.log(savingAcc.showHistory());
