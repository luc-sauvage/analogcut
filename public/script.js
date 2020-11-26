console.log("sanity check");


document.querySelector(".menu-icons").addEventListener("click", () => {
    document.querySelector(".navbar").classList.toggle("active");
});

window.onscroll = function() {
    growShrinkLogo();
};
  
  
function growShrinkLogo() {
    let logo = document.getElementsByClassName("navbar-logo")[0];
    let navbar = document.getElementsByClassName("navbar")[0];
    console.log(screen.width);
    if (screen.width > 1100 && document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log("shrinking!");
        navbar.style.height = "6rem";
        navbar.style.backgroundColor = "black";
        logo.style.width = '12rem';
        logo.style.top = "0";
    } else {
        navbar.style.height = "8rem";
        navbar.style.background = "none";
        if (screen.width > 1100) {
            logo.style.top = "30px"; 
            logo.style.width = '23rem';
        } else {
            logo.style.top = "0px"; 
        }
        console.log("NOT shrinking!");
    }
  }


