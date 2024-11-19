// Seleciona todos os containers de sliders
const sliders = document.querySelectorAll('.container-slider');

sliders.forEach(container => {
    const slider = container.querySelector('.slider');
    const movel = container.querySelector('.slider-icon');
    const imgDisplay = container.querySelector('.img-slider-img');

    function updateSliderValue() {
        const maskValue = slider.value; // Valor do range slider
        imgDisplay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) ${maskValue}%, rgba(0, 0, 0, 0) ${maskValue}%)`;
        movel.style.left = `${maskValue}%`;
    }

    // Atualiza o valor ao mover o slider
    slider.addEventListener('input', updateSliderValue);

    // Inicializa o estado do slider
    updateSliderValue();
});

