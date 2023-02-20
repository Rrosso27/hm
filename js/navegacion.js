document.querySelector(".barss__menu").addEventListener("click", animateBars);

const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const nosotros = document.querySelector(".nosotros");
const carrucel = document.querySelector("carrucel");
function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

}




// parallax 
window.onscroll = function(){

  var posicion = window.pageYOffset || document.documentElement.scrollTop;

  var elemento1 = document.getElementById("icon_heart");
  var elemento2 = document.getElementById("icon_fire");

  elemento1.style.bottom = posicion * 0.2 + "px";
  elemento2.style.top = posicion * 0.1 + "px";

}


// carrusel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


setInterval(function (params) {
  plusSlides(1)
},5000);

// carrusel



// modal 

const btnModal = document.querySelector(".btnModal")
setTimeout(() => {
  btnModal.click();
}, "1000")


