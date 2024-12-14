let map = L.map('wilrijkmap').setView([51.1572, 4.4028], 15); // Coördinaten van Wilrijk

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let circle = L.circle([51.1572, 4.4028], { // Coördinaten voor de cirkel in Wilrijk
    color: 'blue',
    fillColor: '#3A8DF4',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map);

circle.bindPopup("<b>Regio Wilrijk</b>");
