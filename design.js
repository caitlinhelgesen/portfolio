

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
  var index; //this is my counting variable
  var slides = document.getElementsByClassName("carouselImg"); //this gets my class and assigns it to a variable
  var dots = document.getElementsByClassName("dot"); //this assigns the dots beneath my carousel to a variable
  if (n > slides.length) {slideIndex = 1} //this starts my carousel at the beginning
  if (n < 1) {slideIndex = slides.length} //this protects for zero length because people are not always smart
  for (i = 0; i < slides.length; i++) //hello iteration; this increases once each time
      {
        slides[i].style.display = "none"; 
        }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
      }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
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
