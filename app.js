"use strict";
/*
const collision = function () {
  addEventListener(querySelector(".gift").mouseOver())
}*/
var cpt = 0;

let mouseOver = function () {
  if (this.classList.contains('present')) {
    cpt++;
  } else {
    cpt-=3;
  }
  this.style.visibility = "hidden" ;
  document.getElementById("score").innerHTML = cpt;
}

for(let present of document.getElementsByClassName("present")) {
  present.onmouseover = mouseOver;
}

for(let trap of document.getElementsByClassName("trap")) {
  trap.onmouseover = mouseOver;
}


//document.getElementsByClassName("trap")

// compteur de points




const ready = function() {
  document.querySelector("#start").addEventListener("click", function() {
    document.querySelector("footer").classList.add("dnone");
    document.getElementById("start").classList.add("dnone");
    for(let present of document.getElementsByClassName("fall2")) {
      present.style.visibility = "visible";
    }
  });
}
document.addEventListener("DOMContentLoaded", ready);
