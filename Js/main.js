let menu = document.getElementById("menu_bottom");
let button = document.querySelector(".button_menu");
button.addEventListener("click", function(){
 menu.classList.toggle("open");
});
// --------------------------------------TABS-----------------------------------

function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
// --------------------------------------vanish-----------------------------------
let button_vanish = document.querySelector(".button_card");
let content = document.querySelector(".card_2");

button_vanish.addEventListener("click", function(){
  content.classList.toggle("open_content")
})
// --------------------------------------otherone-----------------------------------
// let button_according = document.getElementsByClassName(".button_according");
// for(let i = 0; i < button_according.length; i++){
//   button_according[i].addEventListener("click" ,function(){
//     this.classList.toggle("active")
//     let panel = this.nextElementSibling;
//     if(panel.style.display === "block"){
//       panel.style.display = "none"
//     }else {
//       panel.style.display = "block"
//     }
//    });
// }


let acc = document.getElementsByClassName("button_according");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active_2");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// ------------------------------------------Responsive_Menu-----------------------

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

