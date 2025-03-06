let arr = [];
let input = prompt("moi bạn  nhập 1 dãy ");
if (Number.isInteger(Number(input))) {
    arr = input.split("");
    arr.sort((a,b) => b-a);
    console.log(`${arr[0]} là số lớn nhất trong dãy`)
} else {
    console.log("dãy không hợp lệ");
}


