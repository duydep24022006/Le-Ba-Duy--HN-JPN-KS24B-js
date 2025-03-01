let gio = Number(prompt('mời bạn nhập giờ'));
let phut = Number(prompt('mời bạn nhập phút'));
let giay = Number(prompt('mời bạn nhập giây'));

let result = (gio - 12) >= 0 ? "PM" : "AM";

console.log(`${Math.abs(gio - 12)} : ${phut} : ${giay} ${result}`);


