// #######################################
// Cambiar el año 
// #######################################
const year = document.querySelector('.year');
year.textContent = new Date().getFullYear();

// #######################################
// Hacer el menu movil funcionar
// #######################################
const btnForNavigation = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnForNavigation.addEventListener('click', () => {
  header.classList.toggle('nav-open');
});

// #######################################
// Smooth scrolling 
// #######################################
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach( link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll de regreso a arriba
    if ( href === '#' ) window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // Scroll a otros links
    if ( href !== '#' && href.startsWith('#') ) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: 'smooth'});
    }
    
    // Cerrar la navegación movil
    if ( link.classList.contains('main-nav-link')) 
      header.classList.toggle('nav-open');

  });

});

// #######################################
// Hacer que el navegador se pegue
// #######################################
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function( entries ){
  const ent = entries[0];

  if ( !ent.isIntersecting )
    document.querySelector('body').classList.add('sticky');

  if ( ent.isIntersecting )
    document.querySelector('body').classList.remove('sticky');

}, 

{
  // Dentro de la ventana del navegador
  root: null,
  threshold: 0,
  rootMargin: '-80px'
});

obs.observe( sectionHeroEl );

// #######################################
// Arreglando el gap en algunas versiones de Safari
// #######################################
function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();