/********************/
/* Moving Elements */
/********************/

var options = {
  animation: 500
}

var theList = document.getElementById('list');
var sortable = Sortable.create(theList, options);

/***************************************************/

/* listed items when grabbed move when up or down  */
/* https://jsfiddle.net/joshyfrancis/pqb82wds/     */

/***************************************************/

// var autoscroll = function (offset, poffset, parentNode) {
//     var xb = 0;
//     var yb = 0;
//     if (poffset.isBody == true) {
//       var scrollLeft = poffset.scrollLeft;
//       var scrollTop = poffset.scrollTop;
//       var scrollbarwidth = (document.documentElement.clientWidth - document.body.offsetWidth); //All
//       var scrollspeed = (offset.right + xb) - (poffset.right + scrollbarwidth);
//       if (scrollspeed > 0) {
//         this.scrollLeft(parentNode, scrollLeft + scrollspeed);
//       }
//       scrollspeed = offset.left - (xb);
//       if (scrollspeed < 0) {
//         this.scrollLeft(parentNode, scrollLeft + scrollspeed);
//       }
//       scrollspeed = (offset.bottom + yb) - (poffset.bottom);
//       if (scrollspeed > 0) {
//         this.scrollTop(parentNode, scrollTop + scrollspeed);
//       }
//       scrollspeed = offset.top - (yb);
//       if (scrollspeed < 0) {
//         this.scrollTop(parentNode, scrollTop + scrollspeed);
//       }
//     } else {
//       var scrollLeft = offset.scrollLeft;
//       var scrollTop = offset.scrollTop;
//       var scrollbarwidth = parentNode.offsetWidth - parentNode.clientWidth; 
//       var scrollbarheight = parentNode.offsetHeight - parentNode.clientHeight;
//       var scrollspeed = (offset.right + xb) - (poffset.right - scrollbarwidth);
//       if (scrollspeed > 0) {
//         this.scrollLeft(parentNode, scrollLeft + scrollspeed);
//       }
//       scrollspeed = offset.left - (xb + poffset.left);
//       if (scrollspeed < 0) {
//         this.scrollLeft(parentNode, scrollLeft + scrollspeed);
//       }
//       scrollspeed = (offset.bottom + scrollbarheight + yb) - (poffset.bottom);
//       if (scrollspeed > 0) {
//         this.scrollTop(parentNode, scrollTop + scrollspeed);
//       }
//       scrollspeed = offset.top - (yb + poffset.top);
//       if (scrollspeed < 0) {
//         this.scrollTop(parentNode, scrollTop + scrollspeed);
//       }
//     }
//   };

/*********************/
/* Radio button sort */
/*********************/

var optionAll = document.querySelector("#filter-all");
var optionTokyo = document.querySelector("#filter-tokyo");
var optionKyoto = document.querySelector("#filter-kyoto");
var optionOsaka = document.querySelector("#filter-osaka");
var optionRural = document.querySelector("#filter-rural");

function filterList(event) {
  let deLijst = document.querySelector("ul");
  let nieuweFilter = event.target.value;
  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}

optionAll.addEventListener("change", filterList);
optionTokyo.addEventListener("change", filterList);
optionKyoto.addEventListener("change", filterList);
optionOsaka.addEventListener("change", filterList);
optionRural.addEventListener("change", filterList);


/**********************/
/* Menu down function */
/**********************/

function openMenuMetToetsen(event) {
  let deNav = document.querySelector("nav section:first-of-type");

  switch (event.key) {
    case "ArrowDown":
      deNav.classList.add("toonMenu");
      break; /* break - zodat de andere toetsen niet onnodig gecheckt worden */
    case "ArrowUp":
      deNav.classList.remove("toonMenu");
      break;
    case "Escape":
      deNav.classList.remove("toonMenu");
      break;
  }
}

document.addEventListener('keydown', openMenuMetToetsen);

/*********************/
/* Arrow up function */
/*********************/
let scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
