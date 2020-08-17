
window.addEventListener('load', ()=>{

const tl = gsap.timeline();
tl.fromTo('.section__title--hero',{color:"#ff6508"}, {delay:2, color:"#ffffff"})
   .fromTo('.section__subtitle--hero', {opacity:0}, {opacity:1})
})

const menuBtn = document.getElementById('menu-icon'); // label checkbox
const menuToggle = document.getElementById('menu-btn'); // checkbox
const navItems = document.getElementById('nav-links'); // ul
const navLinks = document.querySelectorAll('.nav-link'); //li
const navLenght = navLinks.length;

// ===================================================================================================
// === Revisa en que link se hizo click, busca el link que tenia la clase active para removerla   ====
// === y luego agregarle al link donde se hizo click la clase active                              ====
// ===================================================================================================


navLinks.forEach(link => {
   link.addEventListener('click', function(){
      navItems.querySelector('.active').classList.remove('active');
      link.classList.add('active');
      menuToggle.checked = false;
   })
});

//Change navigation style on scroll
window.addEventListener('scroll', event => { 
    let nav = document.querySelector('.main-header'); 
    (window.scrollY >= 60) ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('.nav-item');
  let fromTop = window.scrollY;
 
   navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


/* =============
   Slider code
==============*/
// const images = ['project1.jpg','project2.png','project3.png','project4.jpg','project5.jpg','project6.jpg'];
const slider  = document.getElementById('slider').children;
const imgShow = document.getElementById('slider');
const left    = document.getElementById('left');
const right   = document.getElementById('right');
let mouseOver = false;
let activeSlide = 0;
const zInd = [3,2,1,0];  // ==> los z-index de las imagenes en sentido inverso al orden en que seran presentadas

function modulo(x) {
   for (let i = 0; i < slider.length; i++) {
      zInd[i] = Math.abs((zInd[i] + x) % zInd.length);
      slider[i].style.zIndex = zInd[i];
      if(zInd[i] === zInd.length - 1 && !mouseOver){
         activeSlide = i;
         slider[activeSlide].classList.add('portfolio-slider__img--animate');
      } else{
         slider[i].classList.remove('portfolio-slider__img--animate');
      }
   }
}

imgShow.addEventListener('mouseover',()=>{mouseOver = true;});
imgShow.addEventListener('mouseout',()=>{
   slider[activeSlide].classList.add('portfolio-slider__img--animate');
   mouseOver = false;});

right.addEventListener('click',()=>{modulo(1);});
left.addEventListener('click',()=>{modulo(zInd.length-1);});

// para el pase automatico cuando el curso no esta sobre la imagen cada 5 segundos
setInterval(() => {
   if (!mouseOver) { //si el cursor no esta sobre la imagen
      modulo(1);
      slider[activeSlide].classList.add('portfolio-slider__img--animate');
      }
   },5000);


/*
const header = document.getElementById('main-header');
const menuBtn = document.getElementById('menu-icon');
const menuToggle = document.getElementById('menu-btn');
const navLinks = document.querySelectorAll('.nav-item');
const navLenght = navLinks.length;


function changeHeader() {
   (window.scrollY > 50) ? header.classList.add('scrolled') : header.classList.remove('scrolled');
   
   let navigationLinks = document.querySelectorAll('.nav-link');
   let fromTop = window.scrollY;

   navigationLinks.forEach(link => {
      let section = document.querySelector(link.hash);


      if (
         section.offsetTop <= fromTop &&
         section.offsetTop + section.offsetHeight > fromTop
      ) {
         link.classList.add('active');
      } else {
         link.classList.remove('active');
      }
   });


}
window.addEventListener('scroll', changeHeader);


// ===================================================================================================
// === Revisa en que link se hizo click, busca el link que tenia la clase active para removerla   ====
// === y luego agregarle al link donde se hizo click la clase active                              ====
// ===================================================================================================

navLinks.forEach(link => {
   link.addEventListener('click', function(){
      navItems.querySelector('.active').classList.remove('active');
      link.classList.add('active');
      menuToggle.checked = false;
   })
});

*/