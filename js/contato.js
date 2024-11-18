        
// Coordenadas para a localização fornecida
var lat = -22.26817;
var lon = -48.55311;

// Inicializar o mapa
var mapa = L.map('mapa').setView([lat, lon], 15);

// Adicionar camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);

// Criar o ícone vermelho
var iconMarcador = L.icon({
    iconUrl: '../img/icon-localizacao.png',
    iconSize: [30, 30],
    iconAnchor: [15, 20],
    popupAnchor: [1, -25],
    tooltipAnchor: [20, -10]
});

// Criar o marcador com o ícone vermelho
var icon_marcador = L.marker([lat, lon], {icon: iconMarcador}).addTo(mapa);

// Função para obter o endereço via OSM Nominatim quando o cursor é passado sobre
var geocodeUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`;

// Usar fetch para obter o endereço
fetch(geocodeUrl).then(response => response.json()).then(data => {
    var endereco = 'R. Júlio Carbone, 1009 - Jardim Sao Crispim';
    var nome = '<b>Ricardo Detalhamento Automotivo</b>'
    icon_marcador.bindTooltip(endereco);
    icon_marcador.bindPopup(nome).openPopup();
}).catch(error => console.error('Erro ao obter o endereço:', error));