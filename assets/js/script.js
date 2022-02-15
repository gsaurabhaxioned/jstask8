let email_value = document.querySelector('input[name="email"]'),
    email = document.querySelector('#email'),
    error_msg = document.querySelectorAll('.error'),
    error = document.querySelector('#error'),
email_pattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
console.log(email_value);
email.addEventListener('keypress', function () {
    console.log(email_value.value);
    if (email_value.value.match(email_pattern)) {
        error.innerHTML = "";
    } else {
        error.innerHTML = "please enter valid email";
    }
});