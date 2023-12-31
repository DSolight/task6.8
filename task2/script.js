const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const Alert = document.querySelector('#alert');

Alert.addEventListener('click', () => {
    alert('Используется для вывода результата обработки или любой другой информации на экран пользователя при помощи специального окна.');
})

const Prompt = document.querySelector('#prompt');

Prompt.addEventListener('click', () => {
    prompt('Даёт JS возможность выводить специальное окно (pop-up), куда пользователь вводит какое-то значение. Если поняли, напишите "ОК"');
})