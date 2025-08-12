class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
}
class Library {
    constructor() {
        this._books = [];
    }
    addBook(book) {
        this._books.push(book);
    }
    viewBooks() {
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
