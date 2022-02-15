const email_value =document.getElementById('email').value,
email = document.getElementById('email'),
password = document.getElementById('password').value,
error_msg = document.querySelectorAll('.error'),
email_pattern= document.querySelector('error');
email.addEventListener('keypress', function(){
    if(!email_value.match(email_pattern)){
        error.innerHTML="please enter valid email";
    } 
});