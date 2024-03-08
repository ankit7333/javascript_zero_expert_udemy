'use strict';

// const e = require("express");

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Selecting Elements
console.log('---- Selecting Elements ----');
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and Inserting Elements
console.log('---- Creating and Inserting Elements ----');
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analystics.';
message.innerHTML = 'We use cookied for improved functionality and analystics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//Delete Elements
console.log('---- Delete Elements ----');
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function(){
  // message.remove();
  message.parentElement.removeChild(message);
});

//Style
console.log('---- Styles ----');
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).backgroundColor);
console.log(getComputedStyle(message).height);

// message.style.height = getComputedStyle(message).height + 40 + 'px';
message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

//Attributes
console.log('---- Attributes ----');
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.getAttribute('src'));
console.log(logo.className);

//also set attribute
logo.alt = 'Beautiful Logo';
logo.setAttribute('company', 'Bankist');

//custom attribute
console.log(logo.designer); // not a standard to access custom attribute
console.log(logo.getAttribute('designer')); // standard to access custom attribute

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

//Classes
console.log('---- Classes ----');
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

{
const h1 = document.querySelector('h1');
//old method
// h1.onmouseenter = function(){
//   alert('addEventListner: Great! You are reading the heading :D');
// };
//new method 1
const alertH1 = function(){
  alert('addEventListner: Great! You are reading the heading :D');
  // h1.removeEventListener('mouseenter', alertH1);
}
h1.addEventListener('mouseenter', alertH1);

//new method 2
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
}

{
//Event Propagation in practice
//rgb(255,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
// document.querySelector('.nav__link').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   //stop propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// });
}

{
  // const h1 = document.querySelector('h1');
  // //Going downwards: child
  // console.log(h1.querySelectorAll('.highlight'));
  // console.log(h1.childNodes);
  // console.log(h1.parentNode);
  // console.log(h1.parentElement);
  // h1.closest('.header').style.background = 'var(--gradient-secondary)';
  // h1.closest('h1').style.background = 'var(--gradient-primary)';

  // //Going sideways: siblings
  // console.log(h1.previousElementSibling);
  // console.log(h1.nextElementSibling);
}

{
  //Smooth Scrolling
  btnScrollTo.addEventListener('click', function(e){
    //section coordinats
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    //widow page offsets
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
    
    //view port height and width
    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    //scrolling
    //Method 1
    // window.scrollTo(
    //   s1coords.left + window.pageXOffset,
    //   s1coords.top + window.pageYOffset
    // );
    //Method 2
    // window.scrollTo({
    //   left: s1coords.left + window.pageXOffset,
    //   top: s1coords.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });
    //Method 3
    section1.scrollIntoView({behavior: 'smooth'});
  });
}

//page navigation
{
  //Method 1
  // document.querySelectorAll('.nav__link').forEach(function(el){
  //   el.addEventListener('click', function(e){
  //     e.preventDefault();
  //     const id = this.getAttribute('href');
  //     console.log(id);
  //     document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  //   });
  // });

  //Method 2
  //1. Add event listner to common parent element
  //2. Determine what element originated the event
  document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();
    //Matching strategy
    if(e.target.classList.contains('nav__link')){
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
    }
  });
}

//Tabs
// {
//   tabsContainer.addEventListener('click', function(e){
//     const clicked = e.target.closest('.operations__tab');
    
//     //Gaurd clause
//     if(!clicked) return;
    
//     //Active tab
//     tabs.forEach(t => t.classList.remove('operations__tab--active'));
//     clicked.classList.add('operations__tab--active');
    
//     //Active content
//     tabsContent.forEach(c => c.classList.remove('operations__content--active'));
//     document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
//   });
// }

//Tabs
{
  tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');

    //Gaurd clause
    if(!clicked) return;

    //Active tab
    tabs.forEach((t) => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');
    const bgColor = () => {
      const getBg = document.querySelector('.operations__tab--active');
      const setBg = window.getComputedStyle(getBg).backgroundColor;
      console.log(setBg);
      return document.querySelector(`.operations__content--${clicked.dataset.tab}`).style.backgroundColor = setBg;
    }
    bgColor();
    //Active content
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

  });
}

//Menu fade animation
{
  const handleHover = function(e){
    console.log(this);
    if(e.target.classList.contains('nav__link')){
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if(el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  }
  //old method
  // nav.addEventListener('mouseover', function(e){
  //   handleHover(e, 0.5);
  // });
  // nav.addEventListener('mouseout', function(e){
  //   handleHover(e, 1);
  // });

  //better method
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));
}

//Navigation sticky
{
  const initialCoords = section1.getBoundingClientRect();
  window.addEventListener('scroll', function(){
    if(this.window.scrollY > initialCoords.top){
      nav.classList.add('sticky');
    }else{
      nav.classList.remove('sticky');
    }
  });
}

//Reveal section
{
  const revealSection = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
  allSections.forEach(function(section){
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
  });
}

//Lazy loading images
{
  const imgTargets = document.querySelectorAll('img[data-src]');

  const loadImg = function(entries, observer){
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    //Replace src with data-src
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function(){
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  }

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0.20,
    rootMargin: '200px',
  });

  imgTargets.forEach(img => imgObserver.observe(img));
}

//Slider
const slider = function(){
  const slideContainer = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  var startX, startY, moveX, moveY;
  const touchstart = function(e){
    // alert('touchstart');
    	startX = e.touches[0].clientX;
    	startY = e.touches[0].clientY;
      // body.style.ove
  }
  const touchmove = function(e){
    // alert('touchmove');
    moveX = e.touches[0].clientX;
    moveY = e.touches[0].clientY;
  }
  const touchend = function(e){
    // alert('touchend');
    if(startX+100 < moveX && curSlide>0){
      console.log('right');
      alert('right');
      prevSlide();
    }else if(startX-100 > moveX && curSlide<maxSlide-1){
      nextSlide();
      console.log('left');
      alert('left');
    }
  }

  slideContainer.addEventListener('touchstart', touchstart);
  slideContainer.addEventListener('touchmove', touchmove);
  slideContainer.addEventListener('touchend', touchend);

  //----dot click----//
  const createDots = function(){
    slides.forEach((s, i) => (dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)));
  }
  // createDots();

  //---dot active---//
  const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }
  // activateDot(0);

  const goToSlide = function(slide){
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i-slide)}%)`)
    );
  }

  // goToSlide(0);

  const init = function(){
    goToSlide(0);
    createDots();
    activateDot(0);
  }
  init();

  //Next Slide
  const nextSlide = function(){
    if(curSlide === maxSlide - 1){
      curSlide = 0;
    }else{
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  //Prev Slide
  const prevSlide = function(){
    if(curSlide === 0){
      curSlide = maxSlide - 1;
    }else{
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  }
  
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
  dotContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('dots__dot')){
      //const slide = e.target.dataset.slide; // old 
      const {slide} = e.target.dataset; // new by destructuring the code bcz slide name is same from data-slide
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
slider();

document.addEventListener('DOMContentLoaded', function(e){
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function(e){
  console.log('Page fully loaded', e);
});