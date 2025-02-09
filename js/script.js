document.addEventListener("DOMContentLoaded", () => {
  calcScrollValue(); // Assure que le script s'exécute après le chargement
  window.onscroll = calcScrollValue;
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById ("progress");
  let progressValue = document.getElementById ("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#FD4766 ${scrollValue}%,
  #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


  const coords = { x: 0, y: 0 };
            const circles = document.querySelectorAll(".circle");
        
            const colors = ["orangered"];
        
            circles.forEach(function (circle, index) {
              circle.x = 0;
              circle.y = 0;
              circle.style.backgroundColor = colors[index % colors.length];
            });
        
            window.addEventListener("mousemove", function (e) {
              coords.x = e.clientX;
              coords.y = e.clientY;
        
            });
        
            function animateCircles() {
        
              let x = coords.x;
              let y = coords.y;
        
              circles.forEach(function (circle, index) {
                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";
        
                circle.style.scale = (circles.length - index) / circles.length;
        
                circle.x = x;
                circle.y = y;
        
                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
              });
        
              requestAnimationFrame(animateCircles);
            }
        
            animateCircles();

            
            const banner = document.querySelectorAll(".banner_wrapper");

          document.addEventListener("DOMContentLoaded", function() {
            banner.forEach(banner => {
         if (isInView(banner)) {
          banner.classList.add("banner_wrapper--visible");
      }
     });
      });

      document.addEventListener("scroll", function(){
        banner.forEach(banner => {
            if(isInView(banner)) {
              banner.classList.add("banner_wrapper--visible")
            }
        });
      });

      function isInView(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.bottom > 0 &&
          rect.top <
            (window.innerHeight - 150 || document.documentElement.
              clientHeight - 150)
        )
      }


     
     
     
      const abouts = document.querySelectorAll(".about_wrapper");

  document.addEventListener("scroll", function(){
    abouts.forEach(about => {
        if(isInView(about)) {
          about.classList.add("about_wrapper--visible")
        }
    });
  });


  const contacts = document.querySelectorAll(".contact_wrapper");

  document.addEventListener("scroll", function(){
    contacts.forEach(contact => {
        if(isInView(contact)) {
          contact.classList.add("contact_wrapper--visible")
        }
    });
  });


  const portofolios = document.querySelectorAll(".portofolio_wrapper");

  document.addEventListener("scroll", function(){
    portofolios.forEach(portofolio => {
        if(isInView(portofolio)) {
          portofolio.classList.add("portofolio_wrapper--visible")
        }
    });
  });



  








      

      let nav = document.querySelector(".navbar");
      window.onscroll = function () {
        if(document.documentElement.scrollTop > 20) {
          nav.classList.add("header-scrolled");
        } else {
          nav.classList.remove("header-scrolled");
        }
      }


      let navBar = document.querySelectorAll(".nav-link");
      let navCollapse = document.querySelector(".navbar-collapse.collapse");
      navBar.forEach(function(a){
        a.addEventListener("click", function(){
          navCollapse.classList.remove("show");
        })
      })