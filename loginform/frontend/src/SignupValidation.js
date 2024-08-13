function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
        error.name = "İsim boş bırakılamaz!";
    }
    else {
        error.name = "";
    }
    if (values.email === "") {
        error.email = "Email boş bırakılamaz!";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email eşleşmiyor!";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Şifre boş bırakılamaz!";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Şifre eşleşmiyor!";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
