
//Navigation
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');
const newsletter__response =document.querySelector('.newsletter__response')


/*
//Form__Group
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}
var dateTomorrow = year + "-" + month + "-" + date;
var dateform__group = document.querySelector("#date");
var timeform__group = document.querySelector("#time");

dateform__group.setAttribute("min", dateTomorrow);

dateform__group.onchange = function () {
  timeform__group.setAttribute("min", this.value);
}
*/


window.addEventListener('DOMContentLoaded', () =>{
  document.body.style.visibility = 'visible';
});

const navOpen = () => {
   navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

navIconEl.addEventListener('click', navOpen);

navCloseEl.addEventListener('click', navClose);

navBgOverlayEl.addEventListener('click', navClose)


// AOS
// AOS.refreshHard();
AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// const dishGridEl = Array.from(document.querySelectorAll('#dishGrid'));
// if (dishGridEl.length > 0){
//   // console.log(dishGridEl)
//   dishGridEl.forEach(item => {
//     item.setAttribute('data-aos', 'fade-up');
//   })
// }