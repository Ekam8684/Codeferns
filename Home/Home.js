
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

// -----------------------------------banner-----------------------------------


const txts = document.querySelector(".animate-text").children,
  txtsLen = txts.length;
let index = 0;

const textInTimer = 2800,
  textOutTimer = 2800;
function animateText() {
  for (let i = 0; i < txtsLen; i++) {
    txts[i].classList.remove("text-in", "text-out");
  }
  txts[index].classList.add("text-in");

  setTimeout(function () {
    txts[index].classList.add("text-out");
  }, textOutTimer)
  if (index == txtsLen - 1) {
    index = 0;
  }
  else {
    index++;
  }
  setTimeout(animateText, 3000)
}
window.onload = animateText;



// --------------------------------------------------------------------------------

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
// const indicatos = document.querySelector("indicatos-one");
let indexOne = 0;
prev.addEventListener("click", function () {
  prevSlide();
})
next.addEventListener("click", function () {
  nextSlide();
})

function prevSlide() {
  if (indexOne == 0) {
    indexOne = slides.length - 1;
  }
  else {
    indexOne--;
  }
  changeSlide();

}
function nextSlide() {
  if (indexOne == slides.length - 1) {
    indexOne = 0;
  }
  else {
    indexOne++;
  }
  changeSlide();
}
function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
function autoPlay() {
  nextSlide();
}
let time = setInterval(autoPlay, 4000);




















const inputs = document.querySelectorAll(".input");
const inputsOne = document.querySelectorAll(".input-one");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
inputsOne.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});