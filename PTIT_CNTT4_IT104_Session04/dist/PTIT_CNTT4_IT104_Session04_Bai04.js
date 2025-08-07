function handleUnionType(input) {
    if (typeof input === "string") {
        console.log(`${input.length} ký tự`);
    } else if (typeof input === "number") {
        console.log(input % 2 === 0 ? "Đây là số chẵn" : "Đây là số lẻ");
    }
}

handleUnionType("demo123");
handleUnionType(10);