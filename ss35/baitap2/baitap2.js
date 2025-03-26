let addBtn = document.getElementById("addBtn");
let closeBtn = document.querySelector("#close");
let inputTask = document.getElementById("inputTask");
let saveBtn = document.getElementById("saveBtn"); 

addBtn.addEventListener("click", function () {
  inputTask.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  inputTask.style.display = "none";
});

saveBtn.addEventListener("click", () => {
  let nameInput = document.getElementById("nameInput").value.trim();
  let urlInput = document.getElementById("urlInput").value.trim();
  let messageName = document.getElementsByClassName("messgeName");
  let messageUrl = document.getElementsByClassName("messgeUrl");
  if (!nameInput) {
    messageName.innerText = "vui lòng không để trống";
    messageName.style.display = "block";

    setTimeout(() => {
      messageUrl.style.display = "none";
      messageUrl.innerText = "";
    }, 3000);
  }
  if (!urlInput) {
    messageUrl.innerText = "vui lòng không để trống";
    messageUrl.style.display = "block";
    setTimeout(() => {
      messageUrl.style.display = "none";
      messageUrl.innerText = "";
    });
  }
});
