document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todas las flores e iconos
    const elementosParaAnimar = document.querySelectorAll('.agenda-flor, .flor, #flor-int1, #flor-int2, #flor-int3, #user, #gancho, .icon-detalle, .corona');

    const observerOptions = {
        root: null,
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando entra en pantalla: añadir clases de visibilidad
                if (entry.target.classList.contains('icon-detalle') || 
                    entry.target.id === 'user' || 
                    entry.target.id === 'gancho' ||
                    entry.target.classList.contains('corona')) {
                    entry.target.classList.add('icon-visible');
                } else {
                    entry.target.classList.add('flor-visible');
                }
            } else {
                // Cuando sale de pantalla: quitar clases para que desaparezca sutilmente
                entry.target.classList.remove('flor-visible');
                entry.target.classList.remove('icon-visible');
            }
        });
    }, observerOptions);

    elementosParaAnimar.forEach(el => observer.observe(el));
});