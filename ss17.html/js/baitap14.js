let r = Number(prompt("mời bạn nhập vào bán kính"));
let h = Number(prompt("mời bạn nhập vào chiều cao"));
const pi = Math.PI;
let Sxq = (2 * pi * r * h).toFixed(2);
document.write("diện tích xung quanh:" + Sxq + "</br>");
let Stp = (2 * pi * Math.pow(r, 2) + 2 * pi * r * h).toFixed(2);
document.write("diện tích toàn phần:" + Stp + "</br>");
let V = (pi * Math.pow(r, 2) * h).toFixed(2);
document.write("thể tích hình trụ:" + V + "</br>");
let C = (2 * pi * r).toFixed(2);
document.write("chu vi đáy:" + C + "</br>");




