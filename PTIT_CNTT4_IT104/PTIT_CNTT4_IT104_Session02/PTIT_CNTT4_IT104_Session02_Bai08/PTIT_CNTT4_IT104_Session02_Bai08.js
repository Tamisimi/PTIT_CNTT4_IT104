const displayUserInfo = (user = {}) => {
    const {
        name = "Unknown",
        age = 0,
        location = { city: "Unknown", country: "Unknown" },
        contact = { email: "unknown", phone: "unknown" },
        job = { title: "unknown", company: "unknown" }
    } = user;

    return `${name} is ${age} years old, lives in ${location.city}, ${location.country}, works as ${job.title} at ${job.company}, and can be contacted via ${contact.email} or ${contact.phone}.`;
};

const user1 = {
    name: "John",
    age: 25,
    location: { city: "Hanoi", country: "Vietnam" },
    contact: { email: "john@example.com", phone: "0123456789" },
    job: { title: "Developer", company: "Tech Corp" }
};

const user2 = {
    name: "Anna",
    age: 30,
    location: { city: "Da Nang", country: "Vietnam" }
};

console.log(displayUserInfo(user1));
console.log(displayUserInfo(user2));