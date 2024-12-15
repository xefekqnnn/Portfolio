let map = L.map('wilrijkmap').setView([51.1572, 4.4028], 117);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let circle = L.circle([51.1572, 4.4028], { 
    color: 'blue',
    fillColor: '#3A8DF4',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map);

circle.bindPopup("<b>Regio Wilrijk</b>");
