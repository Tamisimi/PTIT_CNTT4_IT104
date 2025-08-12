class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }

    login(): string {
        return "Vui lòng đăng nhập.";
    }

    logout(): string {
        if (this.isLogin) {
            this.isLogin = false;
            return "Đăng xuất thành công.";
        } else {
            return "Bạn chưa đăng nhập.";
        }
    }
}

class userAcc extends Account {
    public status: string;

    constructor(id: number, userName: string, password: string, role: string, status: string) {
        super(id, userName, password, role);
        this.status = status;
    }

    login(): string {
        if (this.status === "active") {
            this.isLogin = true;
            return `Đăng nhập thành công. Xin chào ${this.userName}!`;
        } else if (this.status === "banned") {
            return "Tài khoản đã bị khóa.";
        } else {
            return "Trạng thái tài khoản không hợp lệ.";
        }
    }
}

class adminAcc extends Account {
    constructor(id: number, userName: string, password: string, role: string) {
        super(id, userName, password, role);
    }

    banUser(user: userAcc): string {
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
