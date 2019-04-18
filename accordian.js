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
