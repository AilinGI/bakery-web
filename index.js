let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slider img");

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide, i) => {
    if (i === slideIndex) {
      slide.style.transform = "translateX(0)";
    } else {
      slide.style.transform = "translateX(-100%)";
    }
  });
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

showSlide(slideIndex);
