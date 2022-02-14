const user_input = document.querySelectorAll('.user-input');

for(let i=0;i<user_input.length;i++){
    user_input[i].addEventListener('focus',function(){
        this.style.marginTop= "10px";
    },true);
}





















