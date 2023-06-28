const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"divClass":"dot-selected",
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Event listener for arrows
const arrowLeft = document.querySelector(".arrow_left")

arrowLeft.addEventListener('click', e => {
	console.log("left-arrow")
})

const arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener('click', e => {
	console.log('right-arrow')
})

/********************************* */

let currentSlide = 0;
const slideContainer = document.querySelector("banner");
const imageElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector(".carousel-tagline");
const prevButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");

function showSlide(slideIndex) {
  const slide = slides[slideIndex];
  imageElement.src = slide.image;
  tagLineElement.innerHTML = slide.tagLine;

	  // Remove the dot_selected class from all dots
		const dotElements = document.getElementsByClassName("dot");
		for (let i = 0; i < dotElements.length; i++) {
			dotElements[i].classList.remove("dot_selected");
		}
	
		// Add the dot_selected class to the corresponding dot
		const selectedDot = document.querySelector(`.dot${slideIndex + 1}`);
		if (selectedDot) {
			selectedDot.classList.add("dot_selected");
		}
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Show the initial slide
showSlide(currentSlide);