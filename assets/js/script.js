const inputs = document.querySelectorAll('.user-input'),
 labels = document.querySelectorAll('.input-label');
console.log(labels);
for(i=0;i<inputs.length;i++){
    inputs[i].addEventListener('click', function(){

        labels[i].classList.toggle('input-focus');
    });
}













