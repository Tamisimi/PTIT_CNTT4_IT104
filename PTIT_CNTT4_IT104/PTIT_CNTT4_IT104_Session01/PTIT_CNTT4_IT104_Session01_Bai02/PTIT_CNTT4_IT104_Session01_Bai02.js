const a = 5;
console.log("Giá trị a:", a);
try {
    a = 10;
} catch (error) {
    console.log("Lỗi:", error.message);
}
const arr = [1, 2, 3];
console.log("Mảng:", arr);
arr.push(4);
console.log("Mảng thêm phần tử:", arr);
try {
    arr = [5, 6, 7];
} catch (error) {
    console.log("Lỗi:", error.message);
}