function openFunction() {
    document.getElementById("menu").style.width = "600px";
    document.getElementById("menu").style.backgroundColor = "rgba(131, 134, 131, 0.342);";
    document.getElementById("menu").style.marginRight = "18px";
    document.getElementById("menu").style.borderRadius = "5%";

}
function closeSideMenuFunction() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("mainbox").style.marginRight = "18px";

}



const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    // opacity.forEach(element => {
    //     element.style.opacity = scroll / (sectionY.top + section_height);
    // })

    // big_title.style.opacity = - scroll / (header_height / 2) + 1;
    // shadow.style.height = `${scroll * 0.5 + 300}px`;

    // content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    // image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    // border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})





// ---------------------------------------------------------








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






