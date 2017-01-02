
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
  this.style.display = "none" ;
  document.getElementById("score").innerHTML = cpt;
}

for(let gift of document.getElementsByClassName("present")) {
  gift.onmouseover = mouseOver;
}

for(let trap of document.getElementsByClassName("trap")) {
  trap.onmouseover = mouseOver;
}


//document.getElementsByClassName("trap")

// compteur de points




const ready = function() {
  document.querySelector("#start").addEventListener("click", function() {
    document.querySelector("footer").classList.add("dnone");
  });
}
document.addEventListener("DOMContentLoaded", ready);
