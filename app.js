//================================== Lomotive scroll====================
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true },
});

//      ******************************************************************      //

// body color
scroll.on("scroll", () => {
  if (document.querySelector("#color-bg.is-inview")) {
    document.body.style.background = "#163046";
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.background = "#fefeff";
    document.body.style.color = "#163046";
  }
});

const menubtn = document.querySelector(".hamburger-menu");
const navbtn = document.querySelector(".nav-section");

menubtn.addEventListener("click", () => {
  navbtn.classList.toggle("drawer");
});

const about_btn = document.querySelector(".aboutbt-container");
about_btn.addEventListener("click", () => {
  window.location.href = "about.html";
});
