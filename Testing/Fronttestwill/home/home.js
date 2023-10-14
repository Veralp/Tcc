const userDoLocalStorage = localStorage.getItem("usuario");
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

function verificaLogin() {
    if (userDoLocalStorage) {
        console.log("Usuario logado: " + userDoLocalStorage)
        const linkLogin = document.querySelector("#linkLogin")
        linkLogin.innerHTML = userDoLocalStorage
        const linkLogout = document.querySelector("#linkLogout")
        linkLogout.classList.remove('hide')
    } else {
        console.log("Usuario não logado.");
    }
}
verificaLogin();

function logout() {
    localStorage.removeItem('usuario')
    window.location.reload();
}

