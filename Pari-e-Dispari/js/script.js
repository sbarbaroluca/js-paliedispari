// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var sceltaUtente = prompt('scegli pari o dispari');
var sceltaNumero = parseInt(prompt('scegli ora un numero da 1 a 5'));
console.log(sceltaUtente);
console.log(sceltaNumero);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var randomNumber = getRandom(1, 5);
console.log(randomNumber);

function getRandom (min, max){
  min = Math.ceil(1);
  max = Math.floor(5);
  var random = Math.floor(Math.random() * (max - min + min) + 1);
  return random;
}

// Sommiamo i due numeri
var somma = sceltaNumero + randomNumber;
console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
if(sceltaUtente == pariDispari) {
  console.log('hai vinto');
}
else {
  console.log('hai perso');
}

var pariDispari = controllo(somma);

function controllo(numero) {
  if(somma % 2 == 0){
    var pariDispari = 'pari';
  }
  else {
    var pariDispari = 'dispari';
  }
  return pariDispari;
  }

