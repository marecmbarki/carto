// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=toyama&apiKey=76b2d676841c793fb1d815d95caf51aba293ce35", function (response) {  
    var velos = JSON.parse(response);
   
    var x = 0;
    var y = 0;
    var marker = L.marker([x, y]);
    function dispInfos(e) {
        var addressEvent = document.createElement("li");
        var placesEvent = document.createElement("li");
        var bikesEvent = document.createElement("li");

        addressEvent.id="address";
        placesEvent.id="places";
        bikesEvent.id="bikes";
        
        addressEvent.textContent="Adresse :";
        placesEvent.textContent="il y a .. places";
        bikesEvent.textContent=".. vélos disponibles";
        
        document.getElementById("station_details_list").appendChild(addressEvent);
        document.getElementById("station_details_list").appendChild(placesEvent);
        document.getElementById("station_details_list").appendChild(bikesEvent);
    }

    function dispPlaces(e) {
        var placeEvent = document.createElement("li");
        placeEvent.id="places";
        placeEvent.textContent="il y a .. places";
        document.getElementById("station_details_list").appendChild(places);
    }

    function dispBikes(e) {
        var bikesEvent = document.createElement("li");
        bikeEvent.id="bike";
        bikeEvent.textContent=".. vélos disponibles";
        document.getElementById("station_details_list").appendChild(bike);
    }
    velos.forEach((velo) => {
    x = velo.position.latitude;
    y = velo.position.longitude;
    marker = L.marker([x, y]).addTo(map);
    marker.addEventListener("click", dispInfos);
    });
});

var map = L.map('map').setView([51.505, 137.2183531], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
