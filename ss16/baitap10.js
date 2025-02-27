let min = Number(prompt("mời bạn nhập số thứ min"));
let max = Number(prompt("mời bạn nhập số thứ max"));
let randomNumber = Math.floor(Math.random() * max + min);
document.write(randomNumber);