class Book {
    private id: string;
    private title: string;
    private author: string;
    private stock: number;
    private status: string;

    constructor(id: string, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getStock(): number {
        return this.stock;
    }

    public getStatus(): string {
        return this.status;
    }
}

class Member {
    private id: string;
    private name: string;
    private contact: string;
    private lendedBooks: LendedBook[];
    private status: string;

    constructor(id: string, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getContact(): string {
        return this.contact;
    }

    public getLendedBooks(): LendedBook[] {
        return this.lendedBooks;
    }

    public getStatus(): string {
        return this.status;
    }
}

class LendedBook {
    private memberId: string;
    private bookId: string;
    private dueDate: string;

    constructor(memberId: string, bookId: string, dueDate: string) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    public getMemberId(): string {
        return this.memberId;
    }

    public getBookId(): string {
        return this.bookId;
    }

    public getDueDate(): string {
        return this.dueDate;
    }
}

class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.getTitle()} vào thư viện.`);
    }

    public showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
        } else {
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