const email_value = document.querySelector('#email').value,
    email = document.querySelector('#email'),
    password = document.querySelector('#password').value,
    error_msg = document.querySelectorAll('.error'),
    error = document.querySelector('#error'),
email_pattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
email.addEventListener('keypress', function () {
    if (email_value.match(email_pattern)) {
        error.innerHTML = "";
    } else {
        error.innerHTML = "please enter valid email";
    }
});