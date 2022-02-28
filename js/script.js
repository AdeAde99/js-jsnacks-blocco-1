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


