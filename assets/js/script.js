$(document).ready(function () {
new WOW().init();
});

$(document).ready(function () {
  $(".quote-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: true,
  });
});

$(".books-carousel").owlCarousel({
  loop: true,            
  margin: 10,               
  nav: true,                
  dots: true,                
  autoplay: true,           
  autoplayTimeout: 3000,     
  responsive: {
    0: {
      items: 1,            
    },
    
    550: {
      items: 2               
    },
    900: {
      items: 3               
    },
    1100: {
      items: 4             
    },
    1400: {
      items: 5            
    },
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector("header");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 500) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("nav-open");
  const sidebar = document.querySelector(".nav-sidebar");
  const closeBtn = document.getElementById("nav-close");

  hamburgerBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });
});
