const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".topnav");
  const topnav = document.querySelectorAll(".topnav li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
    //Animate links
    topnav.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "topnavFade 0.5s ease forward ${index / 7 + 2}s";
      }
    });
  });
};

navSlide();
