let arr = [];
let odd = [];
let even = [];
let choice;
let flag;
let sum;
do {
    alert(`==================== MENU ====================
            1. Nhập mảng số nguyên  
            2. Hiển thị mảng
            3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
            4. Tính tổng và trung bình cộng của các số dương trong mảng
            5. Đảo ngược mảng
            6. Kiểm tra mảng có đối xứng không
            7. Thoát
=============================================
        `)
    choice = Number(prompt("Lựa chọn của bạn:"));
    switch (choice) {
        case 1:
            let length = Number(prompt("Mời bạn nhập vào số phần tử trong mảng:"));
            if (length > 0) {
                for (let i = 1; i <= length; i++) {
                    do {
                        let number = prompt("Mời bạn nhập vào giá trị vị trí thứ " + i);
                        if (Number.isInteger(Number(number))) {
                            arr.push(Number(number)); // Ép kiểu về số
                            break;
                        } else {
                            alert("Mời bạn nhập lại giá trị số nguyên tại vị trí " + i);
                        }
                    } while (1);
                }
            } else {
                alert("Số lượng phần tử không hợp lệ!");
            }
            break;

        case 2:
            alert("Mảng hiện tại:"+ arr);
            break;

        case 3:
            arr.sort((a, b) => a - b);
            arr.length === 0? alert("mảng không có phần tử ") : alert(`số lớn nhất là  :${arr[arr.length - 1]} vị trí :${arr.length - 1}`);
            break;
        case 4:
            let averageSum = 0;
            sum = 0;
            if (arr.length === 0) {
                alert("Mảng trống!");
            } else {
                for (let num of arr) {
                    if (num > 0) {
                        averageSum += num;
                        sum++;
                    }
                    
                }
                alert(`Trung bình tổng của mảng là ${averageSum/sum}`)
            }
            break;
        case 5:
            arr.reverse();
            arr.length === 0? alert("mảng không có phần tử") : alert(`đã đảo ngược mảng thành công`);
            break;
        case 6:
            flag = 1;
            if (arr.length>0) {
                for (let i = 0; i < arr.length / 2; i++){
                    if (arr[i] !== arr[arr.length - 1 - i]) {
                        flag = 0;
                        break;
                    }
                }
                flag ? alert("là mảng đối xứng") : alert("không phải là mảng đối xứng");
            } else {
                alert("mảng không có phần tử")
            }
            break;

        case 7:
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 0 đến 9.");
            break;
    }
} while (choice !== 7);
