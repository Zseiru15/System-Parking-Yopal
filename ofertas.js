document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let offset = 0;

    prevButton.addEventListener('click', () => {
        offset -= 300; // Ajusta el valor según el ancho de las ofertas
        if (offset < 0) {
            offset = 0;
        }
        carouselContainer.style.transform = `translateX(-${offset}px)`;
    });

    nextButton.addEventListener('click', () => {
        offset += 300; // Ajusta el valor según el ancho de las ofertas
        const maxOffset = carouselContainer.scrollWidth - carouselContainer.clientWidth;
        if (offset > maxOffset) {
            offset = maxOffset;
        }
        carouselContainer.style.transform = `translateX(-${offset}px)`;
    });
}); 