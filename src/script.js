//module to handle positioning on scroll
(() => {
  const selectors = {
    adRight: document.querySelector(".ad-right"),
    adContainer: document.querySelector(".ad-container"),
  };
  const handleScrolling = () => {
    const ad = selectors.adRight;
    const adCont = selectors.adContainer;
    const windowDiff =
      window.pageYOffset + adCont.getBoundingClientRect().height;
    if (windowDiff > ad.getBoundingClientRect().height) {
      adCont.style.position = "relative";
      adCont.style.top =
        ad.getBoundingClientRect().height -
        adCont.getBoundingClientRect().height +
        "px";
    }
    if (windowDiff < ad.getBoundingClientRect().height) {
      adCont.style.position = "fixed";
      adCont.style.top = "15%";
    }
  };

  window.addEventListener("scroll", handleScrolling);
})();

//hamburger menu module
(() => {
  const selectors = {
    menuBtn: document.querySelector(".hamburger"),
    slideInNav: document.querySelector(".slide-in-nav"),
  };

  const handleMenuToggle = () => {
    selectors.slideInNav.classList.toggle("open");
    console.log("open");
  };

  selectors.menuBtn.addEventListener("click", () => handleMenuToggle());
})();

(() => {
  const selectors = {
    nav: document.querySelector(".menu-desktop"),
    navTitle: document.querySelector(".page-desc"),
  };

  const handleNavScrolling = () => {
    if (window !== undefined && window.pageYOffset > 0) {
      selectors.nav.style.minHeight = "0";
      selectors.navTitle.style.margin = "0";
    } else {
      selectors.nav.style.minHeight = "5rem";
      selectors.navTitle.style.margin = ".5rem 0";
    }
  };

  window.addEventListener("scroll", () => handleNavScrolling());
})();
