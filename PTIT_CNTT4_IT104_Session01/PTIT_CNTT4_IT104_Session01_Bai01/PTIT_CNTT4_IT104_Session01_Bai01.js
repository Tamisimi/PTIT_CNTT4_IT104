console.log("Bắt đầu vòng lặp:");
for (let i = 0; i <= 5; i++) {
    console.log(`Giá trị i trong vòng lặp: ${i}`);
}

console.log("Kết thúc vòng lặp.");
try {
    console.log(`Giá trị i ngoài vòng lặp: ${i}`);
} catch (error) {
    console.log("Lỗi:", error.message);
}