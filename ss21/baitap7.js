let initialAmount = Number(prompt("moi bạn nhập vào số tiền muốn gửi")); 
let interestRate = Number(prompt("moi bạn nhập vào lãi suất"));
let months = Number(prompt("moi bạn nhập vào số tháng muốn gửi"));

let money =  (initialAmount * (Math.pow((1+(interestRate/100)),months))).toFixed(3);
let nonMoney = (money - initialAmount).toFixed(3);

document.write(nonMoney+"<br>");
document.write(money);
