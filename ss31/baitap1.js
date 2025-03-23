const text = document.getElementById("text");
const hideBtn = document.getElementById("hide-text");
const showBtn = document.getElementById("show-text");

hideBtn.addEventListener("click", function () {
  text.style.display = "none";
});
showBtn.addEventListener("click", function () {
  text.style.display = "block";
});
