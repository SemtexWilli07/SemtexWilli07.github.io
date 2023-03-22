// Selektiert das HTML-Element, das den Taschenrechner umgibt
var calculator = document.querySelector('.calculator');
// Selektieren Sie das HTML-Element, das den Anzeigebereich des Taschenrechners enthält
var display = document.getElementById('display');

// Fügen Sie dem Taschenrechner ein "click" Event-Listener hinzu
calculator.addEventListener('click', function(event) {
    // Lesen Sie das angeklickte Element aus
  var target = event.target;

  // Überprüft, ob das angeklickte Element ein Button ist
  if (target.tagName === 'BUTTON') {
    // Liest den Wert des angeklickten Buttons aus dem "data-value" Attribut aus
    var value = target.dataset.value;

    
// Wenn der "=" Button angeklickt wurde, evaluieren Sie den Ausdruck in der Anzeige
    if (value === '=') {
        // Eval wir erstellt um berchnungen auszuführen
      var result = eval(display.value);
      // Setzen Sie das Ergebnis in den Anzeigebereich
      display.value = result;
      // Wenn der "C" Button angeklickt wurde, leeren Sie den Anzeigebereich
    } else if (value === 'C') {
      display.value = '';
      // Andernfalls fügt es den angeklickten Wert zum Anzeigebereich hinzu
    } else {
      display.value += value;
    }//Korrektur wenn = dann wird ´kein undefind mehr ausgegeben
    if(display.value === "undefined"){
      display.value = "";
    }
  }
});

var equal = document.querySelector('.equal');
equal.addEventListener('click', function(){
  if (display.value === '') {
    /*Wenn der Anzeigebereich leer ist, geben es einen Alert aus 
    und ein Bild wird in den Hintergrund eingefügt*/
    alert('Bitte geben Sie eine Zahl ein.');
    document.body.style.backgroundImage = 'url("sad.jpg")';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    display.style.backgroundColor = 'rgba(255,255,255,0.7)';
  } else{
    document.body.style.backgroundImage = 'none';
  }
});

