// SCRIPT for MAIL CHECK

//Console Debug

//dobbiamo richiede la mail all'utente, verificare che appartenza ad un array di mail già presente, segnalare esito positivo o negativo;

//debug con la frutta!
/*
const fruttaRegistered = [
    "banana",
    "mele",
    "pere",
    "cactus",
    "fichi",
    "fragole",
    "uva",
];
console.log(fruttaRegistered);
console.log(fruttaRegistered.length);

var fruttoUtente = prompt("dammi il tuo frutto preferito");
var fruttoPresente = true;

for(i=0; i < fruttaRegistered.length; i++ ){
    if (fruttoUtente == fruttaRegistered[i]){
        fruttoPresente = true;
        break;  
    } else {
        fruttoPresente = false;
    }
}
if (fruttoPresente){
    console.log(`${fruttoUtente} è presente`);
} else {
    console.log(`${fruttoUtente} NON è presente`);
}
*/


//  ORA SUL SERIO

//Array di mail
const mailList = [
    "mail1@boolean.com",
    "mail2@boolean.com",
    "pippo@boolean.com",
    "pluto@boolean.com",
    "banana33@boolean.com",
    "fragola86@boolean.com"
];
//dichiaro una var globale da riempire con un addEventListenere
var mailUtente;
const button = document.querySelector("button#btnSearch");

//aggiungiamo un event listener sul button
button.addEventListener("click", function(){
    mailUtente = document.querySelector("#mailInput").value.toLowerCase();
    let mailPresente;
    let h2 = document.querySelector("h2");

    // percorriamo l'array in cerca di una corrispondenza
    for(i=0; i < mailList.length; i++ ){
        if (mailUtente == mailList[i]){
            mailPresente = true;
            break; //questo non è buona prassi.. 
        } else {
            mailPresente = false;
        }
    }
    
    // se trovata corrispondenza
    if (mailPresente){
        h2.innerHTML = `La mail ${mailUtente} è presente nel nostro database`;
    } else {
        h2.innerHTML = `La mail ${mailUtente} NON è presente nel nostro database`;
    }
});


