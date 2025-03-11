let arr = [];
let odd = [];
let even = [];
let choice;
let flag;
let sum;
do {
    console.log("================== MENU ==================")
    console.log("1. Nhập mảng số nguyên")
    console.log("2. Hiển thị mảng")
    console.log("3. Tìm các phần tử chẵn và lẻ")
    console.log("4. Tính trung bình cộng của mảng")
    console.log("5. Xóa phần tử tại vị trí chỉ định")
    console.log("6. Tìm phần tử lớn thứ hai trong mảng")
    console.log("7. Thêm một phần tử vào vị trí chỉ định")
    console.log("7. Thoát")
    console.log("=========================================")

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
                console.log("Số lượng phần tử không hợp lệ!");
            }
            break;

        case 2:
            console.log("Mảng hiện tại:", arr);
            break;

        case 3:
            let flagEven = 0;
            let flagOdd = 0;
            sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    even.push(arr[i]);
                    flagEven = 1;
                } else {
                    odd.push(arr[i]);
                    flagOdd = 1;
                }
            }
            flagEven ? console.log("tất cả số chẵn trong mảng là " + even) : console.log("Trong mảng không có số chẵn.");
            flagOdd ? console.log("tất cả số lẻ trong mảng là " + odd) : console.log("Trong mảng không có số lẻ.");
            break;
        case 4:
            let averageSum = 0;
            if (arr.length === 0) {
                console.log("Mảng trống!");
            } else {
                for (let num of arr) {
                    averageSum += num;
                }
                console.log(`Trung bình tổng của mảng là ${averageSum/arr.length}`)
            }
            break;
        case 5:
           flag = 0;
            index = Number(prompt("Mời bạn nhập vị trí cần xóa:"));
            arr.splice(index, 1);
            flag ? console.log(`phần tử bạn muốn xóa đã đc xóa khỏi mảng`) : console.log(`phần tử bạn muốn xóa không có trong mảng`);
            break;
        case 6:
            arr.sort((a, b) => a - b);
            arr.length === 0||arr.length === 1 ? console.log("không có số nào lơn thứ 2") : console.log(`số lớn thứ 2 :${arr[arr.length - 2]}`);
            break;

        case 7:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 0 đến 9.");
            break;
    }
} while (choice !== 7);
