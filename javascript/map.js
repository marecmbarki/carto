
class Map {
    load() {
        const ajax = new Ajax();
    
        ajax.ajaxGet("https://api.jcdecaux.com/vls/v3/stations?contract=toyama&apiKey=76b2d676841c793fb1d815d95caf51aba293ce35", function (response) {  
            const velos = JSON.parse(response);
        
            function dispInfos(velo) {
                let dispForm = document.getElementById("station_details");

                dispForm.style.display = "block";
                document.getElementById("address").textContent = velo.address;
                //je stock l'addresse pour l'afficher à la réservation
                sessionStorage.setItem("Address", velo.address);

                document.getElementById("places").textContent = velo.mainStands.availabilities.stands;
                document.getElementById("bikes").textContent = velo.totalStands.availabilities.bikes;
                
            }

            velos.forEach((velo) => {
                const x = velo.position.latitude;
                const y = velo.position.longitude;
                const marker = L.marker([x, y]).addTo(map);
                marker.addEventListener("click", () => dispInfos(velo));
            });
        });

        const map = L.map('map').setView([36.6958, 137.21399999999994], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
        }).addTo(map);
    }
}