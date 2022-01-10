const items = document.querySelectorAll(".nav_item a");

items.forEach((elem) =>
  elem.addEventListener("click", () => {
    const activeElement = document.querySelector(".active");
    const list = elem.classList;
    const listArray = Object.values(list);

    if (listArray.includes("active")) {
      elem.classList.remove("active");
    } else {
      activeElement.classList.remove("active");
      elem.parentElement.classList.add("active");
    }
  })
);
function resizeNav(){
  if(innerWidth < 830){
    const a = document.querySelectorAll('.nav_link')
    a.forEach((elem) =>{
      elem.textContent = null;
    })
    a[0].classList.add('fas')
    a[0].classList.add('fa-home')
    a[1].classList.add('fas')
    a[1].classList.add('fa-clipboard-list')
    a[2].classList.add('fas')
    a[2].classList.add('fa-plus')

  }
  if(innerWidth > 450){
    const a = document.querySelectorAll('.nav_link')

     a[0].textContent = 'Home'
     a[1].textContent = 'About'
     a[2].textContent = 'Add'

     a[0].classList.remove('fas')
     a[0].classList.remove('fa-home')
     a[1].classList.remove('fas')
     a[1].classList.remove('fa-clipboard-list')
     a[2].classList.remove('fas')
     a[2].classList.remove('fa-plus')
 
   }
}
window.onresize = resizeNav

const mainDiv = document.querySelector('#main')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

let slideIndex = 1
let autoIndex = 1
const pushSlide = (n) => {
  showSlides(slideIndex += n)
}

const currentSlide = (n) => {
  showSlides(slideIndex = n)
}
const showSlides = (n) => {
  console.log(n, slideIndex)
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active-dot', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active-dot'
}

function autoSlide () {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active-dot', '')
  }
  autoIndex++
  if (autoIndex > slides.length) {
    autoIndex = 1
  }
  slides[autoIndex - 1].style.display = 'block'
  dots[autoIndex - 1].className += ' active-dot'
  setTimeout(autoSlide, 5000)
}



showSlides(slideIndex)
