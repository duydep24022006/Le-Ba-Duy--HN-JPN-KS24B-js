let arr = [5, 2, 7, 4, 2, 32, 7, 9, 2, 3];
let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        even += arr[i];
    } else {
        odd += arr[i];
    }
}
document.write(`Tổng các số chắn:${even}</br> Tổng các số chắn:${odd}`);
