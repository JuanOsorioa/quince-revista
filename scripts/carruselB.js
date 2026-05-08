// Lógica para el Carrusel 2
const container2 = document.querySelector('.c2-track-container');
const prevBtn2 = document.querySelector('.c2-btn-prev');
const nextBtn2 = document.querySelector('.c2-btn-next');
const slides2 = document.querySelectorAll('.c2-slide');

if (container2 && prevBtn2 && nextBtn2 && slides2.length > 0) {
  let currentIndex = 0;

  // Función para cambiar de slide
  const updateSlides = (idx) => {
    slides2.forEach((slide, i) => {
      slide.style.opacity = (i === idx) ? '1' : '0';
      slide.style.visibility = (i === idx) ? 'visible' : 'hidden';
      slide.style.zIndex = (i === idx) ? '1' : '0';
    });
  };

  // Evento botón anterior
  prevBtn2.onclick = (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + slides2.length) % slides2.length;
    updateSlides(currentIndex);
  };

  // Evento botón siguiente
  nextBtn2.onclick = (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % slides2.length;
    updateSlides(currentIndex);
  };

  // Inicializar mostrando la primera foto
  updateSlides(0);
}

// Para que se mueva solo 
setInterval(() => {
    const nextButtonC2 = document.querySelector('.c2-btn-next');
    if (nextButtonC2) nextButtonC2.click();
}, 4000);