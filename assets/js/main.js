/* Завдання 1:*/

// Задание 1:
// Необходимо вывести на экран числа от 1 до 5.

for (let i = 0; i<=5; i++) {
    console.log(i+1);
}

/* Завдання 1:*/
/* Завдання 2:*/

// Задание 2:
// Необходимо вывести на экран числа от 5 до 1.

for (let i = 5; i>=1; i--) {
    console.log(i);
}

/* Завдання 2:*/
/* Завдання 3:*/

// Задание 3:
// Необходимо вывести на экран таблицу умножения на 3:

// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30

let i = 3;
for (j=1; j<=10; j++)
document.write("<p>"+i+"*"+j+" = "+(i*j)+"</p>");

// let result ='';

// for (let i = 1; i <= 10; i++) {
//     result = `3 * ${i} = ${i * 3}<br>`;
//     document.write(result);
// }

/* Завдання 3:*/
/* Завдання 4:*/

// Задание 4:
// Напишите программу, где пользователь вводит любое целое положительное число. А программа суммирует все числа от 1 до введенного пользователем числа.

let num = parseInt(prompt('Введіть любе число'));
let sum = 0;

for (let i = 0; i <= num; i++) {
    sum += i;
}

console.log(`Сумма числа от 1 до ${num} = ${sum}`);

/* Завдання 4:*/
/* Завдання 5:*/

// Задание 5
// Вычислить факториал введенного числа.

let number = parseInt(prompt('Введите число для расчета факториала данного числа'));
let resultNumber = 1;
while (number) {
    resultNumber *= number--;
}
console.log(`Факториал числа будет ${resultNumber}`);

/* Завдання 5:*/
/* Завдання 6:*/

// Задание 6:
// Нарисовать треугольник из символов *. Высоту выбирает пользователь. Например: высота = 10, на экране.
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

function paintTriangle() {
    const symbol = '*';
    const size = +prompt ('Size');

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < i; j++) {
            document.write(symbol);
        }

        document.write('<br>');
    }
}

paintTriangle();

/* Завдання 6:*/
/* Завдання 7:*/

// Задание 7:
// Нарисовать прямоугольник любым символом, пользователь вводит символ, ширину и высоту.

function creataRectangle() {
    const symbol = prompt ('Symbol');

    const width = +prompt ('Width');
    const height = +prompt ('Height');

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            document.write(symbol);
        }

        document.write('<br>');
    }
}

creataRectangle();

/* Завдання 7:*/
/* Завдання 8:*/

// Задание 8:
// Нарисовать равнобедренный треугольник.

function paintEqualTriangle() {
    const size = 10;
    const symbol = '*';
    const space = '&nbsp;&nbsp;';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size - i; j++) {
            document.write(space);
        }

        const stars = i * 2 + 1;

        for (let j = 0; j < stars; j++) {
            document.write(symbol);
        }

        document.write('<br>');
    }
}

paintEqualTriangle();

/* Завдання 8:*/
/* Завдання 9:*/

// Задание 9:
// В программе генерируется случайное целое число от 0 до 100. Пользователь должен его отгадать не более чем за 10 попыток. После каждой неудачной попытки должно сообщаться больше или меньше введенное пользователем число, чем то, что загадано. Если за 10 попыток число не отгадано, то вывести загаданное число.

function guessNumber() {
    const start = 0;
    const end = 100;

    const n = start + Math.floor(Math.random() * (end - start));

    console.log('n', n);

    let userTries = 10;
    let userWon = false;

    while (userTries > 0 && !userWon) {
        const userInput = +prompt('Вгадай число');

        if (userInput === n) {
            userWon = true;
        } else if (userInput > n) {
            console.log(`Загадане число менше, ви ввели число ${userInput}`);
        } else if (userInput < n) {
            console.log(`Загадане число більше, ви ввели число ${userInput}`);
        } else {
            console.error('Число не розпізнане');
        }

        userTries--;
    }

    if (userWon) {
        alert(`Ви вгадали число ${n} :-)`);
    } else {
        alert(`Ви програли :-(`);
    }
}

guessNumber();
/* Завдання 9:*/