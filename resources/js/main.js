// MIXITUP
var mixer = mixitup('.gallery');

// WOW
wow = new WOW(
    {
    mobile: false
    })
  wow.init();

// MENU
function openMenu(){
    document.getElementById('menu-container').style.width = "100%";
}

function closeMenu(){
    document.getElementById('menu-container').style.width = "0%";
}
