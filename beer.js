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

const nosub = function(event) {
    event.preventDefault();
    const testo = document.querySelector('.textricerca').value;
    var radiovalue = document.getElementsByName('filtros');
    let radio_sub
// PROVA PER DETERMINARE SE LA RADIO VALUE VIENE PROCESSATO
    for (var i = 0, length = radiovalue.length; i < length; i++)
      {
       if (radiovalue[i].checked)
        {
         alert(radiovalue[i].value);
         radio_sub = radiovalue[i].value;
        }
     }

     let request = new XMLHttpRequest();
     let beer_name;
     let found = false
     var url_string = "https://api.punkapi.com/v2/beers";
     var url = new URL(url_string);
     console.log(radio_sub);
     url.searchParams.set('beer_name', testo);
     url.searchParams.set('beer_minchia', testo);
      //          request.open("GET", "https://api.punkapi.com/v2/beers?beer_name=" + testo, true);
                request.open("GET", url , true);
                request.onload = function() {
                             var data = JSON.parse(this.response);
                         //    if (request.status >= 200) {
                                 data.forEach(beers => {
                          found = true;
                          imgurl = beers.image_url;
                          birra = document.createElement('img')
                          birra.setAttribute("src", imgurl);
                          var div = document.createElement("div");
                          div.appendChild(birra);
                          document.querySelector(".lebirre").appendChild(birra);
                          console.log(beers.name);
                          console.log(radiovalue);
                          console.log(beers.id);
                          console.log(beers.description);
                          console.log(beer_name);
                          console.log(url);
                          console.log(radio_sub);
                                    });
                                      if (!found)
                                      {
                                        alert ("birra non presente in magazzino");
                                        console.log(radiovalue);
                                      }
                                 };
                                 request.send();
               }
document.querySelector(".nosubmit").addEventListener("submit", nosub);
