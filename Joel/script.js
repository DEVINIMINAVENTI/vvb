const navTogglera = document.querySelector(".nav-toggler");

navTogglera.addEventListener('click', navToggle);

function navToggle(){

    const nav = document.querySelector(".navlist");
    nav.classList.toggle("hidenav");
   
}


const navTogglerb = document.querySelector(".buttonx");

navTogglerb.addEventListener('click', navToggles);

function navToggles(){

    const nav = document.querySelector(".testimonies");
    nav.classList.toggle("showtestimonies");
   
}