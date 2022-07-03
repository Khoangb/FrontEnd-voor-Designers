/************************/
/* MOVING LIST ELEMENTS */
/************************/

var options = {
  animation: 500
}

var theList = document.getElementById('list');
var sortable = Sortable.create(theList, options);


/*********************/
/* RADIO BUTTON SORT */
/*********************/

var optionAll = document.querySelector("#filter-all");
var optionTokyo = document.querySelector("#filter-tokyo");
var optionKyoto = document.querySelector("#filter-kyoto");
var optionOsaka = document.querySelector("#filter-osaka");
var optionRural = document.querySelector("#filter-rural");

function filterList(event) {
  let theList = document.querySelector("ul");
  let newFilter = event.target.value;
  theList.className = "";
  theList.classList.add(newFilter);
}

optionAll.addEventListener("change", filterList);
optionTokyo.addEventListener("change", filterList);
optionKyoto.addEventListener("change", filterList);
optionOsaka.addEventListener("change", filterList);
optionRural.addEventListener("change", filterList);


/************************************/
/* MENU DOWN FUNCTION WITH KEYBOARD */
/************************************/

function openMenuWKeyboard(event) {
  let deNav = document.querySelector("nav section:first-of-type");

  switch (event.key) {
    case "ArrowDown":
      deNav.classList.add("showMenu");
      break; /* break - zodat de andere toetsen niet onnodig gecheckt worden */
    case "ArrowUp":
      deNav.classList.remove("showMenu");
      break;
    case "Escape":
      deNav.classList.remove("showMenu");
      break;
  }
}

document.addEventListener('keydown', openMenuWKeyboard);


/****************************/
/* ARROW UP - SCROLL BUTTON */
/****************************/
let scrollUp = document.querySelector("i");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});