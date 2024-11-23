// Coordenadas para a localização fornecida
var lat = -22.26817;
var lon = -48.55311;

// Inicializar o mapa
var mapa = L.map('mapa').setView([lat, lon], 15.5);

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

// Inserir o ícone vermelho no mapa
var icon_marcador = L.marker([lat, lon], {icon: iconMarcador}).addTo(mapa);

var endereco = 'R. Júlio Carbone, 1009 - Jardim Sao Crispim';
var link_maps = '<a href="https://www.google.com.br/maps/place/Ricardo+Detalhamento+Automotivo/@-22.2683204,-48.5557521,17z/data=!3m1!4b1!4m6!3m5!1s0x94c757fe6388fcd5:0x2c96f7a23d1f7e97!8m2!3d-22.2683254!4d-48.5531772!16s%2Fg%2F11fzf56x26?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"><b>Ricardo Detalhamento Automotivo</b></a>'
icon_marcador.bindTooltip(endereco);
icon_marcador.bindPopup(link_maps).openPopup();
