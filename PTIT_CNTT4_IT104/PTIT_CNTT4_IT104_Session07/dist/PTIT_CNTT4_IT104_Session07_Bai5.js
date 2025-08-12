class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    getPassword() {
        return this.password;
    }
    login() {
        return `Vui long dang nhap`;
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            return "Đăng xuất thành công.";
        }
        else {
            return "Bạn chưa đăng nhập.";
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            return `Dang nhap thanh cong xin chao ${this.userName}!`;
        }
        else if (this.status === "banned") {
            return "tai khoan bi khoa";
        }
        else {
            return "khong hop le";
        }
    }
}
const user1 = new userAcc(1, "loc", "123456", "user", "active");
console.log(user1.login());
console.log(user1.logout());
const user2 = new userAcc(2, "tam", "654321", "user", "banned");
console.log(user2.login());
console.log(user2.logout());
