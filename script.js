let currentIndex = 0;

function showSlide(index) {
  const carouselContainer = document.querySelector('.carousel-container');
  const slideWidth = document.querySelector('.carousel-item').offsetWidth;
  carouselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.carousel-item').length;
  if (currentIndex < totalSlides - 1) {
    showSlide(currentIndex + 1);
  } else {
    showSlide(0);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  } else {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    showSlide(totalSlides - 1);
  }
}