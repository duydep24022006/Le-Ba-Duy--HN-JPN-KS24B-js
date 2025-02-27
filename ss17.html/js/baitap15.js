let r = Number(prompt("mời bạn nhập vào bán kí hình tròn"));
const pi = Math.PI;
let V = ((4 * pi * Math.pow(r, 3)) / 3).toFixed(3);
document.write("thể tích hình cầu:" +V + "</br>");
let S = (4 * pi * Math.pow(r, 2)).toFixed(3);
document.write("Diện tích bề mặt:" + S + "</br>");
let C = (2 * pi * r).toFixed(3);
document.write("Chu vi lớn nhất của hình cầu:" +C );