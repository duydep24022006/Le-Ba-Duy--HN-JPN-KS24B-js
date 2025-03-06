let arr = [2, 5, 2, 3, 7, 23, 1, 6, 0, 4];
let input = Number(prompt("mời bạn nhập vào giá trị bất kì"));
let count = 0;
if (Number.isInteger(input)) {
    for (let i = 0; i < arr.length; i++) {
        if (input == arr[i]) {
            count++;
        }
    }
}
count !== 0 ? console.log(`số ${input} xuất hiện ${count} lần trong mảng`) : console.log(`số ${input} không tồn tại trong mảng`);
