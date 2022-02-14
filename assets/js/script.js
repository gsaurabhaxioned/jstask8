const inputs = document.querySelectorAll('user-input');

for(i=0;i<inputs.length;i++){
    inputs[i].addEventListener('focus', function(){
        this.classList.toggle('input-focus');
    },true);
}













