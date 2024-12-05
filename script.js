// Carousel Kegiatan Asrama
let currentIndex = 0;

function moveSlide(step) {
    const gallery = document.querySelector('.gallery');
    const totalItems = document.querySelectorAll('.gallery-item').length;

    currentIndex = (currentIndex + step + totalItems) % totalItems;
    const offset = -currentIndex * 33.33; 

    // Transformasi biar pas digeser jadi smooth
    gallery.style.transform = `translateX(${offset}%)`;
}


const carousel = document.querySelector('.carousel');
const testimonials = document.querySelectorAll('.testimonial');

// Testimoni Sliding
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    dots[index].classList.remove('active');
    if (index === currentIndex) {
      slide.classList.add('active');
      dots[index].classList.add('active');
    }
  });

  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
}

function setSlide(index) {
  currentIndex = index;
  updateSlides();
}


