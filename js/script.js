//N1

let name = prompt(`Ваше имя`);
let age = prompt(`Ваш возраст`);
let city = prompt(`Город проживания`);
let phone = prompt(`Ваш телефон`);
let email = prompt(`Ваш электронный адрес`);
let company = prompt(`Компания в которой вы работаете`);
let year = prompt(`В каком году вы родились`);
document.write(`<h1>Меня зовут ${name}. Мне ${age} лет. Я проживаю в
городе ${city} и работаю в компании ${company}. Мои контактные данные:
${phone}, ${email}.<h1>`);

//N2

document.write(`${name} родился в ${year} году`);

//N3

let str = '972882';

if((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])){
    console.log('Да');
} else{
    console.log('Нет');
}


//N4

let a = 1;

if(a > 0){
    console.log('Верно');
} else{
    console.log('Неверно');
}

//N5

let c = 1;
let b = 2;
let sum = c + b;
let residual = c - b;
let work = c * b;
let quotient = 10 / 2;
console.log(`${sum} ${residual} ${work} ${quotient}`)

//N6

if (c > 2 && c < 11 || b >= 6 && b < 14) {
    console.log('верно');
} else {
    console.log('Неверно');
}

//N7

const n = 35;

switch(true){
    case n >= 0 && n < 15 :
        console.log('Первая');
        break;
    case n >= 15 && n < 30 :
        console.log('Вторая');
        break;
    case n >= 30 && n < 45 :
        console.log('Третья');
        break;
    case n >= 45 && n <= 59 :
        console.log('Четвертая');
        break;
    default: console.log('Ошибка');            
}

//N8

let day = 9;

switch(true){
    case day >= 1 && day < 11 :
        console.log('Первая декада');
        break;
    case day >= 11 && day < 21 :
        console.log('Вторая декада');
        break;
    case day >= 21 && day <= 31 :
        console.log('Третья декада');
        break;
    default: console.log('Ошибка');            
}

//N9



//N10

let mounth = prompt('Какой месяц');
mounth = day / 31;

switch(true){
    case mounth >= 1 && mounth < 3 || mounth === 12 :
        console.log('Зима');
        break;
    case mounth >= 3 && mounth < 6 :
        console.log('Весна');
        break;
    case mounth >= 6 && mounth < 9 :
        console.log('Лето');
        break;
    case mounth >= 9 && mounth < 12 :
        console.log('Осень');
        break;
    default: console.log('ошибка');
}
