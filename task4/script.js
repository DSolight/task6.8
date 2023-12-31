const TextField = document.querySelector('#textField')

TextField.addEventListener('click', function(event) {
    this.textContent = prompt('Что вы хотите увидеть на странице?')
    event.preventDefault();
})
