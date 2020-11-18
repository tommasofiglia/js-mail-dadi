var inputEmail = prompt("Inserisci la tua email per verificare se puoi accedere");

// Dichiaro un array contenente la mail-list
 var mailList = ["tommaso@figlia.com", "pinco@pallino.com", "esempio@prova.it", "fabio@pacifici.it", "mariapia@gianguzzi.it", "boolean@careers.it"]

 var checkMail = false;

// Ciclo for
  for (var i = 0; i < mailList.length; i++ ) {

    var emailElement = mailList[i];

    if (emailElement === inputEmail) {
      checkMail = true;
    }

  }

if (checkMail == true) {
  document.getElementById('result').innerHTML = "Accesso consentito alla piattaforma";
} else {
  document.getElementById('result').innerHTML = "Accesso negato! Ricarica la pagina e riprova";
}
