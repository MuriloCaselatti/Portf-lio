const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 120)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll  = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const spans = document.querySelectorAll('.progress-bar .skillspan');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width
});


