// Pegando o elemento do slider e o elemento onde o valor será exibido
const slider = document.getElementById('slider');
const valueDisplay = document.getElementById('slider-value');
const movel = document.getElementById('slider-icon');

// Função para atualizar o valor exibido e a máscara
function updateSliderValue() {
    const imgDisplay = document.getElementById('img-slider');
    
    // O valor do slider define o tamanho da área visível
    const maskValue = slider.value; // Esse valor varia de 0 a 100
    
    // A máscara vai ajustar a largura da área visível com base no valor do slider
    imgDisplay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) ${maskValue}%, rgba(0, 0, 0, 0) ${maskValue}%)`;
    movel.style.left = `${maskValue}%`;
}

// Atualizar o valor sempre que o slider for movido
slider.addEventListener('input', updateSliderValue);

// Inicializar o valor mostrado ao carregar a página
updateSliderValue();
