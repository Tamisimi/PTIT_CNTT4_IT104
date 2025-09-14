function getDataFormAPI1() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Lay du lieu tu API1 tai len giao dien thanh cong")
            res();
        }, 2000)
    })
}
function getDataFormAPI2() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Lay du lieu tu API2 tai len giao dien thanh cong")
            res();
        }, 2000)
    })
}
function getDataFromAPI3() {
    return new Promise((res, reject) => {
        setTimeout(() => {
            console.log("Lay du lieu tu API3 tai len giao dien thanh cong");
            res();
        }, 2000);
    })
}
async function runAllTask() {
    try {
        await getDataFromAPI1();
        await getDataFromAPI2();
        await getDataFromAPI3();
    } catch (error) {
        console.log("error", error);
    }
}
runAllTask();