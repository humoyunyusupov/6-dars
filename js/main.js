var elOpenNavBtn = document.querySelector(".button-burger");
var elHeader = document.querySelector(".site-header");

elOpenNavBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-nav-open");
});

