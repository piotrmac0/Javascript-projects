/* PARALLLAX EFFECT */
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.07 + 'px';
    stars.style.top = value * 0.75 + 'px';
    moon.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.4 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 1.2 + 'px';
    text.style.marginTop = value * 1.2 + 'px';
    btn.style.marginTop = value * 1 + 'px';




})






/* HAMBURGER MENU */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))