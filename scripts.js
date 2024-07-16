// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar el código para enviar el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

// Carrusel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide ? currentSlide.previousElementSibling : null;

    if (prevSlide) {
        moveToSlide(track, currentSlide, prevSlide);
    }
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide ? currentSlide.nextElementSibling : null;

    if (nextSlide) {
        moveToSlide(track, currentSlide, nextSlide);
    }
});

// Set initial slide to the first one
slides[0].classList.add('current-slide');
