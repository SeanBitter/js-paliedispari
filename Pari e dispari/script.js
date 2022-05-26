/*
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer
(usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quell
o random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari,
ha vinto l’utente, altrimenti il computer
*/

let evenOrOdd = prompt("Scegli pari o dispari");
if (evenOrOdd !== "pari" && evenOrOdd !== "dispari") {
    evenOrOdd = prompt("Puoi inserire solo le parole pari o dispari!");
}
let numberOneToFive = parseInt(prompt("Scegli un numero da 1 a 5"));


function randomNumber(min, max) {
    if (min === null || min === undefined || min === 0) {
        return;
    }

    if (max === null || max === undefined || max <= min) {
        return;
    }

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
}

let computerRandomNumber = randomNumber(1, 5);

let sum = computerRandomNumber + numberOneToFive;
console.log("Hai scelto " + evenOrOdd + ". Il tuo numero è " + numberOneToFive + ", quello del computer è " + computerRandomNumber + ", la somma è " + sum);


function evenNumber(number) {
    let evenNumber = false;
    if (number % 2 === 0) {
        evenNumber = true;
    } 

    return evenNumber;
}

let finalResult = evenNumber(sum);
console.log(finalResult);

if (finalResult === true && evenOrOdd === "pari") {
    alert("Hai vinto!");
}  else if (finalResult === false && evenOrOdd === "dispari") {
    alert("Hai vinto!");
} else {
    alert("Hai perso :(")
}


