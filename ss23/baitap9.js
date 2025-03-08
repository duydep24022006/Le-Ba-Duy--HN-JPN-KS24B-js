let arr = [];
let choice;
let flag;
let sum;
do {
    console.log("================== MENU ==================");
    console.log("1. Nhập số phần tử và giá trị các phần tử");
    console.log("2. In ra giá trị các phần tử đang quản lý");
    console.log("3. In ra giá trị các phần tử chẵn và tính tổng");
    console.log("4. In ra giá trị lớn nhất và nhỏ nhất trong mảng");
    console.log("5. In ra các số nguyên tố trong mảng và tính tổng");
    console.log("6. Nhập vào một số và thống kê số lần xuất hiện");
    console.log("7. Thêm một phần tử vào vị trí chỉ định");
    console.log("8. Thoát");
    console.log("=========================================");
    choice = Number(prompt("Lựa chọn của bạn:"));
    switch (choice) {
        case 1:
            let length = Number(prompt("moi bạn nhập vào số phần tử trong mảng"));
            if (length > 0) {
                for (let i = 1; i <= length; i++) {
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
            } else {
                console.log("số lượng phần tử không hợp lệ")
            }
            break;
        case 2:
            console.log(arr)
            break;
        case 3:
            flag = 0;
            sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (Number.isInteger(Number(arr[i]))%2===0) {
                    sum += Number(arr[i]);
                    console.log(arr[i])
                    flag = 1;
                }
            }
             flag ? console.log("tổng của tất cả giá trị chẵn trong mãng là "+sum) : console.log("trong mảng khong có số chẵn") ;
            break;
        case 4:
            arr.sort((a, b) => a - b);
            arr.length > 0 ? console.log("trong mảng không có giá trị") : console.log(`giá trị lớn nhất trong mảng là ${arr[arr.length - 1]} và giá trị nhỏ nhất trong mảng là ${arr[0]}`);
            break;
        case 5:
            break;
        case 6:
            let number = Number(prompt("mời bạn nhập vào giá trị bất kì"));
            let count = 0;
            if (Number.isInteger(number)) {
                for (let i = 0; i < arr.length; i++) {
                    if (number == arr[i]) {
                        count++;
                    }
                }
            }
            count !== 0 ? console.log(`số ${number} xuất hiện ${count} lần trong mảng`) : console.log(`số ${number} không tồn tại trong mảng`);

            break;
        case 7:
            let index = Number(prompt("Mời bạn nhập vị trí cần thêm"));
            let value = Number(prompt("Mời bạn nhập giá trị cần thêm"));
            arr.splice(index, 1, value);
            
            break;
        case 8:
            console.log("cảm ơn bạn đã tin tưởng sử dụng mình")
            break;
        default:
            break;
    }
} while (choice !== 8);
