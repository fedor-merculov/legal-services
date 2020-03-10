let btn = document.querySelector(".nav-menu__hamburger");
let menu = document.querySelector(".nav-menu");

btn.addEventListener("click", function(){
    menu.classList.toggle("active");
    btn.classList.toggle("active");
})