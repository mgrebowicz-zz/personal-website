/*----- cached element references -----*/

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

/*----- event listeners -----*/


/*----- functions -----*/

new fullpage('#fullpage', {
    autoSrcolling: true,
    navigation: true
})

tl.fromTo(hero, 1, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 1.2, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=1.2")