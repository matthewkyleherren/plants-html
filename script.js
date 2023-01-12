/* 
@author SomnathDas
*/

/*
Another practice work of mine, using pure CSS and HTML. This is a responsive navbar as you can see the change while resizing the window size. 

uwu)/ until next time
Last Updated: Jan 01 2022 - 14:00
*/

const openMenu = (menu) => {
  const ExpansionMenu = document.getElementsByClassName("expansionMenu")[0];
  if (menu.classList.contains("open")) {
    ExpansionMenu.style.height = "0%";
    menu.classList.remove("open");
  } else {
    ExpansionMenu.style.height = "100%";
    menu.classList.toggle("open");
  }
};