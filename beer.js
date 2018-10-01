//relativo al menu di destra
const funzione = function() {
  document.querySelector("body").classList.toggle("menuopened");
};
document.querySelector(".buttonbars").addEventListener("click", funzione);

//relativo alla lente a sinistra
const searchbar = function() {
  document.querySelector("body").classList.toggle("searchopened");
};
document.querySelector(".buttonsearch").addEventListener("click", searchbar);

var salvatesto = "beer";

const nosub = function(event) {
  event.preventDefault();
  const testo = document.querySelector(".textricerca").value;
  salvatesto = testo;
  var pagina = 1;
  var perpagina = 2;
  var radiovalue = document.getElementsByName("filtros");
  let radio_sub;
  // PROVA PER DETERMINARE SE LA RADIO VALUE VIENE PROCESSATO
  for (var i = 0, length = radiovalue.length; i < length; i++) {
    if (radiovalue[i].checked) {
      alert(radiovalue[i].value);
      radio_sub = radiovalue[i].value;
    }
  }
  let beer_name;
  let found = false;
  console.log(radio_sub); // check se parametro radio passato correttamente
  if (radio_sub == "nome") {
    geturl(testo, pagina, perpagina);
  }
  return salvatesto;
};

const pagina1 = function(event) {
  event.preventDefault();
  let testo = salvatesto;
  console.log(testo);
  var pagina = 1;
  var perpagina = 2;
  let beer_name;
    geturl(testo, pagina, perpagina);
};

const pagina2 = function(event) {
  event.preventDefault();
  let testo = salvatesto;
  console.log(testo);
  var pagina = 2;
  var perpagina = 2;
  let beer_name;
    geturl(testo, pagina, perpagina);
};

// event listner sul submit
document.querySelector(".nosubmit").addEventListener("submit", nosub);

// event listner sulla paginazione
document.querySelector(".pagination1").addEventListener("click", pagina1);
document.querySelector(".pagination2").addEventListener("click", pagina2);


//document.querySelector(".pagination1").addEventListener("submit", nosub);

//prova di una funzione richiamata in un altra funzione. OK
function load(x) {
  var numberOfPages = 10 + x;
  return numberOfPages;
}

function geturl(textsearch, pagina, perpagina) {

  var list = document.querySelector(".lebirre");
  let request = new XMLHttpRequest();
  var url_string = "https://api.punkapi.com/v2/beers";
  var url = new URL(url_string);


  url.searchParams.set("beer_name", textsearch);
  url.searchParams.set("page", pagina);
  url.searchParams.set("per_page", perpagina);

  request.open("GET", url, true);
  request.onload = function() {
    var data = JSON.parse(this.response);
    var list = document.querySelector(".lebirre");
    if (list.hasChildNodes()) {
      while (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
      }}
    data.forEach(beers => {
      imgurl = beers.image_url;
      birra = document.createElement("img");
      birra.setAttribute("src", imgurl);
      var div = document.createElement("div");
      div.appendChild(birra);
      document.querySelector(".lebirre").appendChild(birra);
      console.log(beers.name);
      console.log(beers.id);
      console.log(beers.description);
    });
  };
  request.send();
}

/*
function getNumberOfPages() {
   let request = new XMLHttpRequest();
   var url_string = "https://api.punkapi.com/v2/beers";
   var url = new URL(url_string);
   url.searchParams.set("beer_name", testo);
   request.open("GET", url, true);
   return (alert="tutto abbuon ja");
}*/
