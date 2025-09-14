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
function runAllTask() {
    getDataFromAPI1()
        .then(() => getDataFromAPI2())
        .then(() => getdataFromAPI3())
        .then(() => console.log("Tat ca cac tac vu da duoc hoan thanh!"))
        .catch((error) => {
            console.log("Loi", error)
        })
}
runAllTask();