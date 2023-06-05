// $(window).scroll(function () {
//   if ($(this).scrollTop() > 50) {
//     $('.navbar').addClass('scrolled');
//   } else {
//     $('.navbar').removeClass('scrolled');
//   }
// });

// Initialize Owl Carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1, // Display only one item at a time
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      992: {
        items: 1,
      },
    },
  });
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const aboutSection = document.querySelector('#about');
    const aboutSectionHeight = aboutSection.offsetHeight;
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= aboutSection.offsetTop - navbarHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const sidebar = document.querySelector('.sidebar');
    const aboutSection = document.querySelector('#about');
    const aboutSectionOffsetTop = aboutSection.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= aboutSectionOffsetTop) {
      sidebar.classList.add('scrolled');
    } else {
      sidebar.classList.remove('scrolled');
    }
  });
});
