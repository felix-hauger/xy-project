
const ready = function() {
  document.querySelector("#start").addEventListener("click", function() {
    document.querySelector("footer").classList.add("dnone");
  });
}
document.addEventListener("DOMContentLoaded", ready);
