 document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.querySelector(".header-nav");

    // Create the hamburger lines inside the menu button
    const span = document.createElement("span");
    menuBtn.appendChild(span);

    menuBtn.addEventListener("click", function() {
      menuBtn.classList.toggle("active");
      nav.classList.toggle("active");
    });

    // Optional: close menu when a nav link is clicked (mobile UX)
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if(window.innerWidth <= 480) {
          menuBtn.classList.remove("active");
          nav.classList.remove("active");
        }
      });
    });

    // Optional: close menu if window is resized bigger than 480
    window.addEventListener("resize", () => {
      if(window.innerWidth > 480) {
        menuBtn.classList.remove("active");
        nav.classList.remove("active");
      }
    });
  });