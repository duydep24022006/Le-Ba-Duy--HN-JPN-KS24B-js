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
arr.sort((a, b) => a - b);

arr.length === 0 ? console.log("không có số nào lơn nhất") : document.write(`số lớn nhất :${arr[arr.length-1]}</br>`+`Vị trí :${arr.length-1}`);
