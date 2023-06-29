const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
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


/********************************* */

let currentSlide = 0;
const slideContainer = document.querySelector("banner");
const imageElement = document.querySelector(".banner-img");
const tagLineElement = document.querySelector(".carousel-tagline");
const prevButton = document.querySelector(".arrow_left");
const nextButton = document.querySelector(".arrow_right");

// Function to show the slide
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

// Function to selecte the next slide
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
	console.log("next slide")
}

// Function to select the previous slide
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
	console.log("previous slide")
}

// Event listener for arrows
prevButton.addEventListener("click", prevSlide)
nextButton.addEventListener("click", nextSlide)

// Show the initial slide
showSlide(currentSlide);