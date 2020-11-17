var playButton = document.getElementById('play-button');
var resetButton = document.getElementById('reset-button');

// Dichiaro le variabili relative ai pòunteggi
var yourPoints = Math.floor(Math.random() * 5) + 1;
var pcPoints = Math.floor(Math.random() * 5) + 1;


// Calcolo del vincitore

playButton.addEventListener('click', function () {

  document.getElementById('your-points').innerHTML = "Hai ottenuto " + yourPoints + " punti";
  document.getElementById('pc-points').innerHTML = "Il tuo browser ha ottenuto " + pcPoints + " punti";


  if (yourPoints > pcPoints) {
    document.getElementById('victory').innerHTML = "Complimenti! Hai vinto questo match";
    resetButton.style.display = "block";
  } else if (yourPoints < pcPoints) {
    document.getElementById('victory').innerHTML = "Oh no! Il tuo browser ha vinto";
    resetButton.style.display = "block";
  } else {
    document.getElementById('victory').innerHTML = "Un pareggio... poteva andare peggio!";
    resetButton.style.display = "block";
  }

  }
);

resetButton.addEventListener('click', function () {
  location.reload();
}
);
