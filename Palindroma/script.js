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

        if (wordInOrderSplit === wordInReverse) {
            palindromeWord = true;
        }

    console.log(wordInOrderSplit);
    console.log(wordInReverse);
}

console.log(isPalindrome(userWord));