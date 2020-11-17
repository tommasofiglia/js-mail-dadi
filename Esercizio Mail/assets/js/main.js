// Dichiaro la variabile che indica il button di verifica e quello di azzeramento
 var buttonVerify = document.getElementById('btn-verify');
 var buttonAzzera = document.getElementById('btn-reset');

// Dichiaro la variabile relativa alla mail inserita dall'utente
 var inputEmail = document.getElementById('email');

// Dichiaro la variabile relativa alla mail inserita dall'utente
 var inputEmailValue = document.getElementById('email').value;

// Dichiaro un array contenente la mail-list
 var mailList = ["tommaso@figlia.com", "pinco@pallino.com", "esempio@prova.it", "fabio@pacifici.it", "mariapia@gianguzzi.it", "boolean@careers.it"]

// Imposto l'if per vedere se la mail inserita è contenuta nella lista

buttonVerify.addEventListener('click', function () {

  if (mailList.includes(inputEmailValue)) {
    document.getElementById('result').innerHTML = "La mail è presente nella lista!" ;
  } else {
    document.getElementById('result').innerHTML = "Purtroppo la mail non è presente nella lista" ;
  }
  }
);

// Imposto il button azzera

buttonAzzera.addEventListener('click', function () {
    location.reload();
    document.getElementById('result').innerHTML = "" ;
  }
);
