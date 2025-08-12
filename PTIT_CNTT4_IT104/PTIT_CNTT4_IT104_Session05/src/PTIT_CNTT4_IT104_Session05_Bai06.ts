class Book {
    private _title: string;
    private _author: string;

    constructor(title: string, author: string) {
        this._title = title;
        this._author = author;
    }

    public get title(): string {
        return this._title;
    }

    public get author(): string {
        return this._author;
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
            console.log(`Book ${index + 1}: Title: ${book.title}, Author: ${book.author}`);
        });
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("Pride and Prejudice", "Jane Austen");
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.viewBooks();