// Bước 1 : tạo lớp book
class Book {
    id: number // mã sách
    title: string // tên sách
    author: string // tên tác giả
    year: number // năm phát hành
    constructor(id: number, title: string, author: string, year: number) {
        this.id = id
        this.title = title
        this.author = author
        this.year = year
    }
}
// Bước 2 : Tạo lớp thư viện library
class Library<T extends { id: number, name: string }> {
    // Tạo mảng chứa các quyển sách trong thư viện
    books: T[] = [];
    // Dịnh nghĩa các phương thức:
    // 1. thêm sách vào thư viện
    addBook(book: T): void {
        this.books.push(book);
    }
    //2.Tìm sách theo id (nếu có trả về sách,không có trả về undefind)
    getBookById(id: number): T | undefined {
        return this.books.find(item => item.id === id)
    }
    //3 . Xóa sách khỏi thư viện theo id
    removeBookById(id: number): void {
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log("không có sách ")
        } else {
            let confirmDetele = confirm(` bạn có muốn xóa sách: ${this.books[index].name}`)
            if (confirmDetele) {
                this.books.splice(index, 1);
            }
        }
    }
    //4. Cập nhật thông tin sách
    updateBook(id: number, new_book: T): void {
        const book = this.books.findIndex(item => item.id === id);
    }
}
//Bước 3: Viết các hàm triển khai ứng dụng