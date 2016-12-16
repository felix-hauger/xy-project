
/*
const collision = function () {
  addEventListener(querySelector(".gift").mouseOver())
}*/
let cpt = 0;

let mouseOver = function () {
  this.style.display = "none" ;
  cpt++;
  document.getElementById("score").innerHTML = cpt;
}

for(let gift of document.getElementsByClassName("gift")) {
  gift.onmouseover = mouseOver;
}




// compteur de points




const ready = function() {
  document.querySelector("#start").addEventListener("click", function() {
    document.querySelector("footer").classList.add("dnone");
  });
}
document.addEventListener("DOMContentLoaded", ready);
