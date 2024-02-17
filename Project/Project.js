// AOS.init({
//   offset: 400, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 1000 // values from 0 to 3000, with step 50ms
// });


















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




