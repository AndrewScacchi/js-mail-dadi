// giuoco dei dadi
// Ad un click del button, generare due numeri random 1-6, confrontarli, il numero più alto vince!

console.log("helloworld!");

// Creo una funzione che generi un numero da 1 a 6
function diceRoll() {
    return Math.floor(Math.random() * 6);
  }

let myRoll = diceRoll();
let pcRoll = diceRoll();

console.log(`My roll is ${myRoll}`); 
console.log(`PC roll is ${pcRoll}`); 

if (myRoll > pcRoll){
    console.log(`L'umano VINCE!`);
} else if (myRoll < pcRoll){
    console.log(`La Macchina VINCE!`);
} else {
    console.log(`Pari! What are the ODDS!`)
}