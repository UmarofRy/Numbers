let h1 = document.getElementById('h1');
let inputNumber = document.getElementById('inputNumber');
let sendButton = document.getElementById('sendButton');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let background = document.getElementById('background');


sendButton.addEventListener('click', function() {
    h1.textContent = inputNumber.value;
});


btn2.addEventListener('click', function() {
    inputNumber.value = parseInt(inputNumber.value) + 1;
    h1.textContent = inputNumber.value;
});


btn3.addEventListener('click', function() {
    inputNumber.value = parseInt(inputNumber.value) - 1;
    h1.textContent = inputNumber.value;
});


background.addEventListener('input', function() {
    h1.style.color = background.value;
});