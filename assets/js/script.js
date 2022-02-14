const inputs = document.querySelectorAll('.user-input'),
    labels = document.querySelectorAll('.input-label');

for (let i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener('click', function () {
        labels[i].classList.toggle('input-focus');
    });
}