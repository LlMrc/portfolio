const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true },
});

const backbtn = document.querySelector(".container-btn");

backbtn.addEventListener("click", () => {
  window.history.back();
});
