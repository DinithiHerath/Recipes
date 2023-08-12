// Get the main element
const main = document.querySelector('main');

// Add smooth scrolling functionality to the navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

// JavaScript to trigger the fade-in animation
document.addEventListener("DOMContentLoaded", function() {
  // Get the element to fade in
  var fadeElement = document.querySelector(".fade-in");

  // Add the active class to trigger the animation
  fadeElement.classList.add("active");
});

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      var targetId = link.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

window.onscroll = () =>{
    navbar.classList.remove('active');
 }

 var swiper = new Swiper(".reviews-slider", {
    loop:true,
    slidesPerView: "auto",
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
       el: ".swiper-pagination",
    },
    breakpoints: {
       768: {
         slidesPerView: 1,
       },
        991: {
         slidesPerView: 2,
       },
    },
 });


document.addEventListener("DOMContentLoaded", function(event) {
    // Update section height when the page loads or the window is resized
    updateSectionHeight();
  
    // Update section height when the content changes
    window.addEventListener("resize", updateSectionHeight);
  });
  
  function updateSectionHeight() {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.height = "auto"; // Reset the height
      sections[i].style.height = sections[i].offsetHeight + "px"; // Set the new height
    }
  }
  
