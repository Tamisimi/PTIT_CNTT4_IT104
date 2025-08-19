// Bước 1 : tạo lớp book
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// Bước 2 : Tạo lớp thư viện library
class Library {
    constructor() {
        // Tạo mảng chứa các quyển sách trong thư viện
        this.books = [];
    }
    // Dịnh nghĩa các phương thức:
    // 1. thêm sách vào thư viện
    addBook(book) {
        this.books.push(book);
    }
    //2.Tìm sách theo id (nếu có trả về sách,không có trả về undefind)
    getBookById(id) {
        return this.books.find(item => item.id === id);
    }
    //3 . Xóa sách khỏi thư viện theo id
    removeBookById(id) {
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log("không có sách ");
        }
        else {
            let confirmDetele = confirm(` bạn có muốn xóa sách: ${this.books[index].name}`);
            if (confirmDetele) {
                this.books.splice(index, 1);
            }
        }
    }
    //4. Cập nhật thông tin sách
    updateBook(id, new_book) {
        const book = this.books.findIndex(item => item.id === id);
    }
}
//Bước 3: Viết các hàm triển khai ứng dụng
