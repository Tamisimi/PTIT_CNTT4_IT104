const typeConsole = (type = "log") => {
    const message = `Đây là type: ${type}`;
    switch (type.toLowerCase()) {
        case "log":
            console.log(message);
            break;
        case "warn":
            console.warn(message);
            break;
        case "error":
            console.error(message);
            break;
        default:
            console.log(message);
    }
};

typeConsole("log");
typeConsole("warn");
typeConsole("error");
typeConsole(); 