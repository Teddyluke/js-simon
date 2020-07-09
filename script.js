// Un alert espone 5 numeri casuali (univoci).
// Poi parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

var totNumeriDaIndovinare = 5;
var arrayNumeriDaRicordare = [];
var checkNumeri;

while (arrayNumeriDaRicordare.length < totNumeriDaIndovinare ) {
  checkNumeri = Math.floor(Math.random() * 50);
  if (numberController(checkNumeri, arrayNumeriDaRicordare) == false) {
    arrayNumeriDaRicordare.push(checkNumeri);
  }
}
alert("Simon dice : " + arrayNumeriDaRicordare);

var punteggio = 0;
var numAzzeccati = [];

setTimeout(guessTheNumber, 30000);
function guessTheNumber() {
  for (var i = 0; i < totNumeriDaIndovinare; i++) {
    var numUtente = parseInt(prompt("inserisci uno alla volta i numeri visti in precedenza"));
    if (numberController(numUtente,arrayNumeriDaRicordare) == true) {
      punteggio++;
      numAzzeccati.push(numUtente);
    }
  }
  console.log("hai indovinato ben :" + punteggio +" numeri. I numeri indovinati sono: " + numAzzeccati);
}



function numberController(num1, arrey) {
  for (var i = 0; i < arrey.length; i++) {
    if (arrey[i] == num1) {
      return true ;
    }
  }
  return false;
}
