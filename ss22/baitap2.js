let number = [10, 4, 2, 7, 3, 6, 9];
let search = Number(prompt("mời bạn nhập vào số muốn đoán"));
if (Number.isInteger(number)) {
    let result = number.indexOf(search);
    if (result === -1) {
        console.log("chúc bạn may mắn lần sau");
    } else {
        console.log("Bingo");
    }
} else {
    console.log("lỗi cú pháp")
}