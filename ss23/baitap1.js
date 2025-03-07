let arr = [];
for (let i = 1; i <= 10; i++){
    do {
        let number = prompt("moi bạn nhập vào giá trị vị trí thứ " + i);
        if (Number.isInteger(Number(number))) {
            arr.push(number);
            break;
        } else {
            alert("moi bạn nhập lại giá trị đúng yêu cầu tại vị trí " + i);
        }
    } while (1);
}
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 10) {
        arr.splice(i, 1);
        i--;
    }
}
arr.length === 0 ? console.log("không có số nào lơn hơn 10") : console.log(arr);
