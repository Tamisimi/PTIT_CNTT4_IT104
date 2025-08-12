const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

const extractData = ({ data: { title, author: { name: authorName, email: authorEmail } } }) => {
    console.log("Title:", title);
    console.log("Author Name:", authorName);
    console.log("Author Email:", authorEmail);
};

extractData(response);