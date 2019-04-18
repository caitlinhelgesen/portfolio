

// Carousel JS
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carouselImg");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Accordian

var accordian = document.getElementsByClassName("accordian");
var i;

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function(){
    console.log("accordian")
    this.classList.toggle("active");
   var acctext = this.nextElementSibling;
    if (acctext.style.display === "block"){
      acctext.style.display = "none";
    }
    else{
      acctext.style.display = "block";
    }
    });
}

//Video Player

 const player = new Plyr('#player');
