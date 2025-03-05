let number = Number(prompt("mời bạn nhập 1 số ngẫu nhiên"));
if (Number.isInteger(number)) {
    for (let i = 0; i < Math.abs(number); i++) {
        if (number % i == 0) {
            console.log(i);
        }
    }
} else{
    console.log("không hợp lệ");
}
