var alle_elemente = [];

function VerschiebeDiv () {
  var mein_gefundenes_div = document.getElementById('MeinDiv');

  var alter_top_wert = parseInt(mein_gefundenes_div.style.top);

  
  mein_gefundenes_div.style.top = (alter_top_wert + 10) + 'px';

  StarteTimeout();
  }


function StarteTimeout() {

  window.setTimeout("VerschiebeDiv();", 200);
}

function ErstelleElement () {
  var neues_element = document.createElement('div');

  neues_element.style.position = 'absolute';

  neues_element.style.top = '100px';
  neues_element.style.left = ZufallsXImFenster()+'px';
  neues_element.style.width = '100px';
  neues_element.style.height = '100px';
  neues_element.style.backgroundColor = "green";

  document.body.appendChild(neues_element);

  alle_elemente.push(neues_element);
}

function ZufallsXImFenster() {
  return Math.floor((Math.random() * document.body.offsetWidth))
}

function BewegeAlleElemente() {
      for (var i = 0; i < alle_elemente.length; i++) {
      alle_elemente[i].style.top = (parseInt(alle_elemente[i].style.top) + 100) + 'px';
    }
    StarteTimeout();
}

function Debug() {
  alert(document.body.offsetWidth);
}

