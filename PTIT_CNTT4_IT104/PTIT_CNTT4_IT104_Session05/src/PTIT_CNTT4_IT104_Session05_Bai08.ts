class Book {
    private _id: number;
    private _title: string;
    private _author: string;

    constructor(id: number, title: string, author: string) {
        this._id = id;
        this._title = title;
        this._author = author;
    }

    public get id(): number {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }

    public get author(): string {
        return this._author;
    }

    public set author(value: string) {
        this._author = value;
    }
}

class Library {
    private _books: Book[];

    constructor() {
        this._books = [];
    }

    public addBook(book: Book): void {
        this._books.push(book);
    }

    public viewBooks(): void {
        this._books.forEach((book, index) => {
            console.log(`Book ${index + 1}: ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
        });
    }

    public updateBook(id: number, newTitle: string, newAuthor: string): void {
        const book = this._books.find(book => book.id === id);
        if (book) {
            book.title = newTitle;
            book.author = newAuthor;
        } else {
            console.log(`Book with ID ${id} not found.`);
        }
    }

    public searchBooksByTitle(searchTerm: string): void {
        const foundBooks = this._books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
        if (foundBooks.length > 0) {
            foundBooks.forEach((book, index) => {
                console.log(`Found Book ${index + 1}: ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
            });
        } else {
            console.log(`No books found with title containing "${searchTerm}".`);
        }
    }
}

const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book(2, "1984", "George Orwell");
const book3 = new Book(3, "To Kill a Mockingbird", "Harper Lee");
const book4 = new Book(4, "Pride and Prejudice", "Jane Austen");
const book5 = new Book(5, "The Catcher in the Rye", "J.D. Salinger");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

console.log("Danh sách sách trong thư viện:");
library.viewBooks();

console.log("\nTìm kiếm sách có tiêu đề chứa 'The':");
library.searchBooksByTitle("The");