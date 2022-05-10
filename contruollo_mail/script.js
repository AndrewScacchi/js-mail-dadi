// SCRIPT for MAIL CHECK

//Console Debug

//dobbiamo richiede la mail all'utente, verificare che appartenza ad un array di mail già presente, segnalare esito positivo o negativo;

//debug con la frutta!

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

