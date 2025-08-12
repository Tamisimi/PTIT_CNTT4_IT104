class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
        return "Vui lòng đăng nhập.";
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
            return `Đăng nhập thành công. Xin chào ${this.userName}!`;
        }
        else if (this.status === "banned") {
            return "Tài khoản đã bị khóa.";
        }
        else {
            return "Trạng thái tài khoản không hợp lệ.";
        }
    }
}
class adminAcc extends Account {
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
    }
    banUser(user) {
        if (user.status === "banned") {
            return `Người dùng ${user.userName} đã bị khóa trước đó.`;
        }
        user.status = "banned";
        return `Người dùng ${user.userName} đã bị khóa thành công.`;
    }
}
const user1 = new userAcc(1, "loc", "123456", "user", "active");
console.log(user1.login());
console.log(user1.logout());
const admin1 = new adminAcc(99, "admin", "admin123", "admin");
console.log(admin1.banUser(user1));
console.log(user1.login());
