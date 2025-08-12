function processInput(input) {
    if (typeof input === "string") {
        if (!isNaN(parseInt(input))) {
            const num = parseInt(input);
            console.log(num * num);
        } else {
            const letterCount = input.replace(/[^a-zA-Z]/g, "").length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    } else if (typeof input === "number") {
        console.log(input % 2 === 0 ? "Số chẵn" : "Số lẻ");
    } else if (typeof input === "boolean") {
        console.log(input ? "True - Tiến hành" : "False - Dừng");
    }
}

processInput("123");
processInput("abc123!");
processInput(7);
processInput(4);
processInput(true);
processInput(false);