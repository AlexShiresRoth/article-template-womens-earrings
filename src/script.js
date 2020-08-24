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
      adCont.style.top = "82%";
      console.log(windowDiff, ad.getBoundingClientRect().height);
    }
    if (windowDiff < ad.getBoundingClientRect().height) {
      adCont.style.position = "fixed";
      adCont.style.top = "15%";
      console.log("fixed", windowDiff, ad.getBoundingClientRect().height);
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
