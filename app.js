const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()
const navToggle = document.querySelector('.btn-toggle');
const links = document.querySelector(".nav-links")
navToggle.addEventListener("click", () =>{
 links.classList.toggle("showLinks")
})


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 62) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove('showLinks');

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    //
    let position;
    if (navbar.classList.contains('fixed')) {
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }
    if (window.innerWidth < 992) {
      if (navbar.classList.contains('fixed')) {
        position = element.offsetTop - 62;
      } else {
        position = element.offsetTop - 332 - 62;
      }
    }
    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: 'smooth',
    });
  });
});
