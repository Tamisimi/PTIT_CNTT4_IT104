let phoneBooks = [];

const addContact = (name, phone, email) => {
    phoneBooks = [...phoneBooks, { name, phone, email }];
};

const displayContacts = () => {
    console.log("Danh bạ điện thoại:");
    phoneBooks.forEach(({ name, phone, email }) => {
        console.log(`Tên: ${name}, Số điện thoại: ${phone}, Email: ${email}`);
    });
};

addContact("Nguyen Van A", "0123456789", "nguyenvana@gmail.com");
addContact("Tran Thi B", "0987654321", "tranthib@gmail.com");
displayContacts();