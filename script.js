let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    slides[currentIndex].classList.remove('active');  // Remove 'active' class from the current slide
    currentIndex = (currentIndex + 1) % totalSlides;  // Move to the next slide
    slides[currentIndex].classList.add('active');  // Add 'active' class to the new slide
}

setInterval(changeSlide, 1000);  // Change slide every 3 secondss