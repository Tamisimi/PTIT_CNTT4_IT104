class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.getTitle()} vào thư viện.`);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
        }
        else {
            this.books.forEach(book => {
                console.log(`ID: ${book.getId()}, Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getStock()}, Tình trạng: ${book.getStatus()}`);
            });
        }
    }
}
const library = new Library();
const book1 = new Book("B1", "Lập trình TypeScript", "Nguyễn Văn A", 5, "Có sẵn");
const book2 = new Book("B2", "Cấu trúc dữ liệu", "Trần Thị B", 3, "Có sẵn");
const book3 = new Book("B3", "Thuật toán cơ bản", "Lê Văn C", 2, "Đã mượn");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
