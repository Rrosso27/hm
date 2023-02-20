// hamburguesa

document.querySelector(".bars_menu").addEventListener("click", animationBars);

const line1_bars = document.querySelector(".line1Bars-menu");
const line2_bars = document.querySelector(".line2Bars-menu");
const line3_bars = document.querySelector(".line3Bars-menu");
const menuConten = document.querySelector(".menuConten");
const body = document.querySelector("#body");

const gridCheck1 = document.querySelector("#gridCheck1")

function animationBars() {
    menuConten.classList.toggle("active");
    body.classList.toggle("none_scroll");
    line1_bars.classList.toggle("activeline1Bars-menu");
    line2_bars.classList.toggle("activeline2Bars-menu");
    line3_bars.classList.toggle("activeline3Bars-menu");

}

//  eend hamburguesa
