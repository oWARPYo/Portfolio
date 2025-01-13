// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 0px";
    //document.getElementById("navbarComponent").style.fontSize = "25px";
    //document.getElementById("navbar-ul").style.position="fixed" ;
    const navbar_items = document.getElementsByClassName("navbar-item") ;
    for (let i = 0; i < navbar_items.length; i++) {
      navbar_items[i].style.fontSize = "18px" ;
      //navbar_items[i].style.width = "80%" ;
    }
    document.getElementById("logo").style.height = "50px" ;
    document.getElementById("logo").style.width = "50px" ;

    document.getElementById("theme-icon").style.height = "25px" ;
    document.getElementById("theme-icon").style.width = "25px" ;

    const dropdownElements = document.getElementsByClassName("dropdown-content-a") ;
    for (let i = 0; i < dropdownElements.length; i++) {
      dropdownElements[i].style.fontSize = "18px" ;
    }
    
  } else {
    document.getElementById("navbar").style.padding = "35px 0px";
    //document.getElementById("navbarComponent").style.fontSize = "40px";
    //document.getElementsByClassName("navbar-item").style.fontSize = "25px" ;
    //document.getElementById("navbar-ul").style.position="fixed" ;
    const navbar_items = document.getElementsByClassName("navbar-item")
    for (let i = 0; i < navbar_items.length; i++) {
      navbar_items[i].style.fontSize = "22px" ;
      //navbar_items[i].style.width = "100%" ;
    }
    document.getElementById("logo").style.height = "70px" ;
    document.getElementById("logo").style.width = "70px" ;

    document.getElementById("theme-icon").style.height = "35px" ;
    document.getElementById("theme-icon").style.width = "35px" ;

    const dropdownElements = document.getElementsByClassName("dropdown-content-a") ;
    for (let i = 0; i < dropdownElements.length; i++) {
      dropdownElements[i].style.fontSize = "22px" ;
    }
  }
}