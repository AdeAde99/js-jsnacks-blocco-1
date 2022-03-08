/*Snack 1.1*/
/*
const num1 = parseInt(prompt('Numero1:'));
const num2 = parseInt(prompt('Numero2:'));

if (num1 > num2) {
    alert(num1);
} else if (num2 > num1) {
    alert(num2);
} else {
    alert('sono uguali');
}
*/




/*Snack 1.2*/
/*
const word1 = prompt('Parola uno');
const word2 = prompt('Parola due');

if (word1.length > word2.length) {
    console.log(word2);
    console.log(word1);
} else {
    console.log(word1);
    console.log(word2);
}
*/




/*Snack 1.3*/
/*Senza array*/
/*
let num;
let sum = 0;
let i = 0;

for (i = 0; i < 10; i++) {
    num = parseInt(prompt('Inserire un numero'));
    sum = sum + num;
}

console.log(sum);
*/


/*Con array*/
/*
const arrDieciNum = [];
sum = 0;

for (let i = 0; i < 10; i++) {
    arrDieciNum.push(parseInt(prompt('Inserisci un numero')));
}
console.log(arrDieciNum);

for (let index = 0; index < arrDieciNum.length; index++) {
    sum = sum + arrDieciNum[index];
}
console.log(sum);
*/




/*Snack 1.4*/
/*
const arrListNames = ['a','b','c','d','e'];
const name = prompt('Inserisci il tuo nome');
let found = false;

for (let i = 0; i < arrListNames.length; i++) {
    if (arrListNames[i] == name) {
        found = true;
    }
}

if(found) {
    console.log('Puoin entrare');
} else {
    console.log('Non puoi entrare');
}
*/

/*Snack 1.5*/
/*
let arrPari = [];

for (let i = 0; i < 6; i++) {
    let num = parseInt(prompt('Inserisci un numero'));
    if (num % 2) {
        
    } else {
        arrPari.push(num);
    }

}

console.log(arrPari);
*/




/*Snack 1.6*/
/*
let numero = prompt('Inserisci un numero con più cifre');
let sum = 0;

for (i = 0; i < numero.length; i++) {
    sum = sum + parseInt(numero[i]);
}

console.log(sum);
*/

/*Snack 1.9*/
/*
let sum = 0

for (let i = 1; i <=10; i++) {
    sum = sum + i;
    console.log(i);
}

let media = sum / 10;
console.log(sum);
console.log(media);
*/


/*Snack 2.1*/
/*Con ciclo for*/
/*
let sum = 0;
for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt('Inserisci un numero'));
    sum += number;
}
console.log(sum);
*/


/*Ciclo while*/
/*
let sum = 0;
let i = 0;

while (i < 5) {
    let number = parseInt(prompt('Inserisci un numero'));
    sum += number;
    i++;
}
*/




/*Snack 2.2*/
/*
let number = parseInt(prompt('Inserisci un numero'));

if (isNaN(number)) {
    alert('Non hai inserito un unmero');
} else {
    if (number % 2 == 0) {
        console.log(number);
    } else {
        console.log(number + 1);
    }
}
*/

/*Snack 2.3*/
/*
const arrNomi = ['a','b','c','d','e']
const arrCognomi = ['1','2','3','4','5']
 
for (i = 0; i < 3; i++) {
const indexRandomNome = Math.floor(Math.random() * arrNomi.length);
const nome = arrNomi [indexRandomNome];

const indexRandomCognome = Math.floor(Math.random() * arrCognomi.length);
const cognome = arrCognomi [indexRandomCognome];

const NomeComposto = nome + ' ' + cognome;
console.log(NomeComposto);
}
*/


/*Snack*/

const arrAuto = [
    {
        'marca' : 'a',
        'modello' : '1',
        'alimentazione' : 'benzina'
    },

    {
        'marca' : 'b',
        'modello' : '2',
        'alimentazione' : 'benzina'
    },

    {
        'marca' : 'c',
        'modello' : '3',
        'alimentazione' : 'benzina'
    },

    {
        'marca' : 'd',
        'modello' : '4',
        'alimentazione' : 'metano'
    },

    {
        'marca' : 'e',
        'modello' : '5',
        'alimentazione' : 'elettrico'
    },

    {
        'marca' : 'f',
        'modello' : '6',
        'alimentazione' : 'gpl'
    },

    {
        'marca' : 'g',
        'modello' : '7',
        'alimentazione' : 'diesel'
    },

    {
        'marca' : 'h',
        'modello' : '8',
        'alimentazione' : 'diesel'
    },

    {
        'marca' : 'i',
        'modello' : '9',
        'alimentazione' : 'diesel'
    },

    {
        'marca' : 'j',
        'modello' : '10',
        'alimentazione' : 'diesel'
    }
];

let arrAutoBenzina = [];
let arrAutoDiesel = [];
let arrAutoAltro = [];

for (let i = 0; i < arrAuto.length; i++) {
    let auto = arrAuto[i];

    if (auto.alimentazione == 'benzina') {
        arrAutoBenzina.push(auto);
    } else if (auto.alimentazione == 'diesel') {
        arrAutoDiesel.push(auto);
    } else {
        arrAutoAltro.push(auto);
    }
}

console.log(arrAuto);
console.log(arrAutoBenzina);
console.log(arrAutoDiesel);
console.log(arrAutoAltro);