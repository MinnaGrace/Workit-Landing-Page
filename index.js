const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav= document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function(){
    bar1.classList.toggle("animatebar1");
    bar2.classList.toggle("animatebar2");
    bar3.classList.toggle("animatebar3");
    mobileNav.classList.toggle("open");
})

window.addEventListener('resize', function listen(event) {
    if (window.innerWidth > 600) {
      mobileNav.classList.remove("open");
      bar1.classList.remove("animatebar1");
      bar2.classList.remove("animatebar2");
      bar3.classList.remove("animatebar3");
    }
  });