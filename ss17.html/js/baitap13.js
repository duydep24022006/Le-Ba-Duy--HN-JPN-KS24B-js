let price = Number(prompt("mời bạn nhập số tiền cần gửi"));
let month = Number(prompt("mời bạn nhập số tháng cần gửi"));
let n = (4.3/100)/12;
let lai = price * (month * n);
alert(`số tiền lãi bạn nhận đc là ${lai}`);
