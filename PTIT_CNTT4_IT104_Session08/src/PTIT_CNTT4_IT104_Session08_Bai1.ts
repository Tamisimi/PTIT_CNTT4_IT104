enum weekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

const days: string[] = Object.values(weekDays);
console.log("Danh sách các ngày trong tuần:");
days.forEach(day => {
    console.log(day);
});