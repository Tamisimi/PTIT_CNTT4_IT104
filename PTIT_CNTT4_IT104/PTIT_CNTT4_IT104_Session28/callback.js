function askForPhoneNumber() {
    let phoneNumber;
    console.log("Thắng gọi cho Minh xin số đt của Lộc");
    console.log("Thắng đợi mình tý, mình tìm số");
    setTimeout(() => {
        console.log("Tìm thấy số rồi");
        phoneNumber = 12345;
        callback(phoneNumber);
    }, 3000);
}

function processPhoneNumber(sdt) {
    console.log(`Thắng gọi cho Lộc theo số: ${sdt}`)
}