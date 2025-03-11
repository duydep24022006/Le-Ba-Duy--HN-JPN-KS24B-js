const arr = [-2, 5,-6, 3, 5, 7];

function positiveNumber(arr) {
    if (arr.length === 0) {
        console.log("mảng không chứa phần tử")
        return 0;
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])&&arr[i]>0) {
            count++;
        }
    }
    return count;
}
const count = positiveNumber(arr);
count? console.log(count) : console.log("Không có số nguyên dương trong mảng");


