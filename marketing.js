// Typewriter

window.addEventListener('load', typeWriter, false)
var text = 0;
var heading = 'nnovation Workshops; Technology Planning; Marketing Strategy; Corporate Communications & Media Engagement';
var speed = 65;

function typeWriter() {
  console.log("typewriter function")
  if (text < heading.length) {
    document.getElementById("inno").innerHTML += heading.charAt(text);
    text++;
    setTimeout(typeWriter, speed);
  }
}
