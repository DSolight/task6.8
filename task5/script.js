const inputField = document.querySelector('#field1');
const duplicate = document.querySelector('#duplicateField');
const buttonField = document.querySelector('#button1');

inputField.addEventListener('input', function(event) {
    duplicate.textContent = this.value;
})

buttonField.addEventListener('click', function(event) {
    console.log(inputField.value);
    inputField.value = "";
    duplicate.textContent = "";
})
