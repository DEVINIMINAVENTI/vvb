const navToggler = document.querySelector(".nav-togglerb");

navToggler.addEventListener('click', navToggle);

function navToggle(){

    const nav = document.querySelector(".sidebar ul");
    nav.classList.toggle("sidebar");
   
}


const navTogglera = document.querySelector(".nav-toggler");

navTogglera.addEventListener('click', navToggles);

function navToggles(){

    const nav = document.querySelector(".navbar ul");
    nav.classList.toggle("navbarbaa");
   
}