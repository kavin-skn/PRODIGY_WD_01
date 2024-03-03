document.addEventListener("DOMContentLoaded", function() {
    
    var navbar = document.getElementById("navbar");

    
    var navbarPosition = navbar.offsetTop;

    window.onscroll = function() {
        
        if (window.pageYOffset >= navbarPosition) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };
});
