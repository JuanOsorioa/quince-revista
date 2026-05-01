const track = document.querySelector('.carrusel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');

let currentIndex = 0;

const updateSlidePosition = () => {
    // Calculamos el ancho de un slide para saber cuánto desplazar
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    
    // Actualizar clase current-slide
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('current-slide');
        } else {
            slide.classList.remove('current-slide');
        }
    });
};

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al inicio si quieres carrusel infinito
    }
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Va al final
    }
    updateSlidePosition();
});

// Ajustar posición si se cambia el tamaño de la ventana
window.addEventListener('resize', updateSlidePosition);