const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
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
/*********************************** */




const dot = document.querySelectorAll('.banner-img');
const nbDot = dot.length;
let count = 0;

function slidePrevious(){
	dot[count].classList.remove("img")

	if(count < nbDot - 1){
		count++;
	} else {
		count = 0;
	}

	dot[count].classList.add('img')
	console.log(count);
}
arrowLeft.addEventListener('click', slidePrevious)


function slideNext(){
	dot[count].classList.remove(".hidden")

	if(count < nbDot - 1){
		count++;
	} else {
		count = 0;
	}

	dot[count].classList.add('.hidden')
	console.log(count);
}
arrowRight.addEventListener('click', slideNext)