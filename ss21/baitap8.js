console.log("Các số Armstrong có 3 chữ số là:");
document.write("Các số Armstrong có 3 chữ số là:<br>");

for (let i = 100; i < 1000; i++) {
    let sum = 0;
    let temp = i;
    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, 3);
        temp = Math.floor(temp / 10);
    }
    if (sum === i) {
        console.log(i);
        document.write(i + "<br>");
    }
}