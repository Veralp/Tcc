const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const interval = 4000; // Tempo em milissegundos entre os slides

function nextSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
}

function startCarousel() {
    slides[currentIndex].style.opacity = 1;
    nextSlide(); // Chame nextSlide uma vez imediatamente
    setInterval(nextSlide, interval);
}

startCarousel();
