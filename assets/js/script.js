const email =document.getElementById('email').value,
password = document.getElementById('password').value,
error_msg = document.querySelectorAll('.error'),
email_pattern= document.querySelector('error');
email.addEventListener('keypress', function(){
    if(!email.match(email_pattern)){
        email_pattern.innerHTML="please enter valid email";
    } 
});