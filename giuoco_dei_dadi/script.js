// giuoco dei dadi
// Ad un click del button, generare due numeri random 1-6, confrontarli, il numero più alto vince!
console.log("helloworld!");

// Creo una funzione che generi un numero da 1 a 6
function diceRoll() {
    return Math.floor(Math.random() * 6 + 1);
    }

//console.log debug
/*
let myRoll = diceRoll();
let pcRoll = diceRoll();
console.log(`My roll is ${myRoll}`); 
console.log(`PC roll is ${pcRoll}`); 

if (myRoll > pcRoll){
    console.log(`L'umano VINCE!`);
} else if (myRoll < pcRoll){
    console.log(`La Macchina VINCE!`);
} else {
    console.log(`Pari! What are the ODDS!`);
}
*/

// Ora applico la funzione sopra ad un eventListener (click button) e aggiungo il risultato all'interno dei due div.dice preparati.

const button = document.querySelector("button.btn");

button.addEventListener("click", function(){
    //create a random 1-6diceROll for pc and human
    let myRoll = diceRoll();
    let pcRoll = diceRoll();
    //dichiaro il h1 come variabile
    let h1 = document.querySelector("h1");

    //Inserire il risultato nei due dadi diversi
    document.querySelector(".diceOne").innerHTML = `${myRoll}`;
    document.querySelector(".diceTwo").innerHTML = pcRoll;

    // Modificare il h1 finale in base al risultato
    if (myRoll > pcRoll){
        h1.innerHTML = `${myRoll} è maggiore di ${pcRoll}, l'umano VINCE`;
    } else if (myRoll < pcRoll){
        h1.innerHTML = `${myRoll} è minore di ${pcRoll}, la macchina VINCE`;
    } else {
        h1.innerHTML = `Sia la macchina che l'umano hanno ottenuto ${myRoll}! What are the ODDS?!`;
    }

    //c'è di sicuro modo per snellire il codice.
   
    }

);