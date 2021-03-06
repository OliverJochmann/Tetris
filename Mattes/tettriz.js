var newElement = null;
var alleAngekommenenElemente = [];

function createNewElement() {
  newElement = document.createElement("div");
  newElement.style.width = (30) + 'px';
  newElement.style.height = (30) + 'px';
  newElement.style.position = 'absolute';
  newElement.style.top = '0px';
  newElement.style.left = '150px';
  newElement.style.backgroundColor = 'red';

  document.body.appendChild(newElement);
  moveLastElement();
}

function moveLastElement() {
  var altePositionTop = parseInt(newElement.style.top);
  var altePositionLeft = parseInt(newElement.style.left);
  var bodyUnterkannte = document.body.offsetHeight;
  var neuePositionTop = altePositionTop + 10;
  var neuePositionLeft = altePositionLeft;

  var elementHeight = parseInt(newElement.style.height);
  var elementUnterkannte = (neuePositionTop + elementHeight);
  var elementNichtAngekommen = elementUnterkannte < bodyUnterkannte;
  
  if (lastKey == 'a') {
    neuePositionLeft-=30;
    lastKey = null;
  }
  if (lastKey == 'd') {
    neuePositionLeft+=30;
    lastKey = null;
  }

  newElement.style.top = neuePositionTop + 'px';
  newElement.style.left = neuePositionLeft + 'px';


  if (elementNichtAngekommen && !elementKollidiert(newElement)) {
    window.setTimeout(moveLastElement, 300);
  }
  else {
    alleAngekommenenElemente.push(newElement);
    createNewElement();
  }
}

function elementKollidiert(bewegendesElement) {
  
  var linkeKanteBeweg = parseInt(bewegendesElement.style.left);
  var obereKanteBeweg = parseInt(bewegendesElement.style.top);
  var rechteKanteBeweg = linkeKanteBeweg + parseInt(bewegendesElement.style.width);
  var untereKanteBeweg = obereKanteBeweg + parseInt(bewegendesElement.style.height);
  
  for (var i = 0; i < alleAngekommenenElemente.length; i++) {
    var vergleichsElement = alleAngekommenenElemente[i];

    var linkeKanteVergleich = parseInt(vergleichsElement.style.left);
    var obereKanteVergleich = parseInt(vergleichsElement.style.top);
    var rechteKanteVergleich = linkeKanteVergleich + parseInt(vergleichsElement.style.width);
    var untereKanteVergleich = obereKanteVergleich + parseInt(vergleichsElement.style.height);


    var ueberElementAusgerichtet = (rechteKanteBeweg > linkeKanteVergleich) &&
                       (linkeKanteBeweg < rechteKanteVergleich);

    var untereKanteAngekommen = (untereKanteBeweg > obereKanteVergleich);

    if (ueberElementAusgerichtet && untereKanteAngekommen) {
      return true;
    }
  }

  return false;
}

createNewElement();

var lastKey = null;
document.addEventListener('keypress', (event) => {
  lastKey = event.key;
});