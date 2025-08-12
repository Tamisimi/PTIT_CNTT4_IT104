const createUser = (name, age = 18, role = "user") => {
    const user = { name, age, role };
    console.log(`Name: ${user.name}, Age: ${user.age}, Role: ${user.role}`);
};

createUser("Dev");
createUser("Nguyen Van A", 20, "Admin");