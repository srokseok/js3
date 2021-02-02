// var name = prompt('введите имя');
// var year = +prompt('введите год рождения');

// console.log(name + ', ' + 'ваш возраст ' + (2021 - year));

function a(name, year, now) {
    alert(name + ', ' + 'ваш возраст ' + (now - year));
}

var name = prompt('введите имя');
var year = +prompt('введите год рождения');
var now = +prompt('введите нынешний год');
a(name, year, now);

function ran(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

var pr = +prompt('введите количество примеров');

let max = +prompt('введите макс число');
let min = +prompt('введите мин число');

for (let i = 0; i < pr; i++) {
    let num1 = ran(min,max);
    let num2 = ran(min,max);
    let operation = Math.floor(Math.random() * 4);
    if (operation == 0){
        let pr = +prompt(num1 + ' + ' + num2 + ' = ');
        let answer = (num1 + num2) == pr ? 'ваш ответ верный' : 'ваш ответ неверный.';
        alert(num1 + ' + ' + num2 + ' = ' + (num1 + num2) + ' ваш ответ ' + pr + answer);
    }
    else if (operation == 1){
        let pr = +prompt(num1 + ' - ' + num2 + ' = ');
        let answer = (num1 - num2) == pr ? 'ваш ответ верный' : 'ваш ответ неверный.';
        alert(num1 + ' - ' + num2 + ' = ' + (num1 - num2) + ' ваш ответ ' + pr + answer);
    }
    
    else if (operation == 2){
        let pr = +prompt(num1 + ' * ' + num2 + ' = ');
        let answer = (num1 * num2) == pr ? 'ваш ответ верный' : 'ваш ответ неверный.';
        alert(num1 + ' * ' + num2 + ' = ' + (num1 * num2) + ' ваш ответ ' + pr + answer);
    }
    
    else {
        let pr = +prompt(num1 + ' / ' + num2 + ' = ');
        let answer = (num1 / num2) == pr ? 'ваш ответ верный' : 'ваш ответ неверный.';
        alert(num1 + ' / ' + num2 + ' = ' + (num1 / num2) + ' ваш ответ ' + pr + answer);
    }
}