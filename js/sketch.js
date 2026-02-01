const burger = document.getElementById("burger");
const nav = document.querySelector(".navbar");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    document.querySelector("header")
        .classList.toggle("scrolled", window.scrollY > 50);
});