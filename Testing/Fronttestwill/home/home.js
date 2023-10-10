const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const interval = 3500; // Tempo em milissegundos entre os slides

function nextSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
}

function startCarousel() {
    slides[currentIndex].style.opacity = 1;
    setInterval(nextSlide, interval);
}

startCarousel();
