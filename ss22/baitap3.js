let arr = [];
let input = prompt("moi bạn  nhập 1 dãy ");
if (Number.isInteger(Number(input))) {
    for (let i = input.length - 1; i >= 0; i--) {
        arr.push(input[i]);
    }
    console.log(arr);
} else {
    console.log("dãy không hợp lệ");
}


