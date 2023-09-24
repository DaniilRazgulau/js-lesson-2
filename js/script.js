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

let a = [1, 0 , -3];

if(a > 0){
    console.log('Верно');
} else{
    console.log('Неверно');
}

//N5

let az = 10;
let bz = 2;
let sum = az + bz;
let residual = az - bz;
let work = az * bz;
let quotient = 10 / 2;
console.log(`${sum} ${residual} ${work} ${quotient}`)

//N6



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


