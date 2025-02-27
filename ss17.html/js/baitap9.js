
let a = Number(prompt("Nhập giá trị a:"));
let b = Number(prompt("Nhập giá trị b:"));
let c = Number(prompt("Nhập giá trị c:"));
let delta = (Math.pow(b, 2) - 4 * a * c); 
let X1 = (-b + Math.sqrt(delta)) / (2 * a);
let X2 = (-b - Math.sqrt(delta)) / (2 * a);
document.write(`X1= ${X1}`+ "</br>");
document.write(`X2= ${X2}`);

