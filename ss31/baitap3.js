const bgr = document.getElementsByClassName("container")[0];

document.getElementById("red").addEventListener("click", function () {
  removeColors();
  bgr.classList.add("cl-red");
});
document.getElementById("green").addEventListener("click", function () {
  removeColors();
  bgr.classList.toggle("cl-green");
});

document.getElementById("purple").addEventListener("click", function () {
  removeColors();
  bgr.classList.toggle("cl-purple");
});
function removeColors() {
  bgr.classList.remove("cl-red", "cl-green", "cl-purple");
}
