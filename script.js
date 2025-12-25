// Navbar 
	let menu = document.querySelector('.toggleMenu');
	let ul = document.querySelector('ul');
	let i = document.querySelector('.navIcon');
	menu.addEventListener('click', () => {
 ul.classList.toggle('active');
 i.classList.toggle('fa-bars');
  i.classList.toggle('fa-xmark');
	});

     // Home 
 const slides = document.getElementById('slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  updateSlider();

  


