/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt("Inserisci una parola");

function isPalindrome(wordInOrder) {

    const wordInOrderSplit = wordInOrder.split("");
    const wordInReverse = [];
    palindromeWord = false;

    for (let i = wordInOrderSplit.length -1; i >= 0; i--) {
        wordInReverse.push(wordInOrderSplit[i]);
    }

    const wordInReverseJoin = wordInReverse.join('');

        if (wordInOrder === wordInReverseJoin) {
            palindromeWord = true;
        }

    return palindromeWord;
}

console.log(isPalindrome(userWord));
let ok = isPalindrome(userWord);
if ((ok) === true) {
    console.log(userWord + " è palindroma!");
} else {
    console.log(userWord + " non è palindroma");
}