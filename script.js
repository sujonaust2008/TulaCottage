var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function nextSlide(){ 
  for(var i =0; i<slides.length; i++){
    slides[i].classList.remove('activeSlide');
  }
  slides[currentSlide].classList.add("activeSlide");
  var childElement = document.getElementById('slideText');
  slides[currentSlide].appendChild(childElement);
  currentSlide++;

  if(currentSlide === slides.length){
    currentSlide = 0;
  }
}

nextSlide();

setInterval(nextSlide, 4000);
