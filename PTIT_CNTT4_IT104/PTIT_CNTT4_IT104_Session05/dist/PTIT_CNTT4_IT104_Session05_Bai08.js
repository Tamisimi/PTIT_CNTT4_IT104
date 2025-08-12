class Book {
    constructor(id, title, author) {
        this._id = id;
        this._title = title;
        this._author = author;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get author() {
        return this._author;
    }
    set author(value) {
        this._author = value;
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
            console.log(`Book ${index + 1}: ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
        });
    }
    updateBook(id, newTitle, newAuthor) {
        const book = this._books.find(book => book.id === id);
        if (book) {
            book.title = newTitle;
            book.author = newAuthor;
        }
        else {
            console.log(`Book with ID ${id} not found.`);
        }
    }
    searchBooksByTitle(searchTerm) {
        const foundBooks = this._books.filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()));
        if (foundBooks.length > 0) {
            foundBooks.forEach((book, index) => {
                console.log(`Found Book ${index + 1}: ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
            });
        }
        else {
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
