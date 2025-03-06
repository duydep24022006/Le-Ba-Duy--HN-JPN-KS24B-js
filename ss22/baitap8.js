let arr = [2, 5, 2, 3, 7, 23, 1, 6, 0, 4];
let count = 0;

if (Number.isInteger(input)) {
    for (let i = 0; i < arr.length; i++) {
        if (input == arr[i]) {
            count++;
        }
    }
}
