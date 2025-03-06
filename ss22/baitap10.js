let arr = [];
let choice;
do {
    console.log("        MENU")
    console.log("1. Nhập vào mảng")
    console.log("2. Hiển thị mảng")
    console.log("3. Thêm phần tử")
    console.log("4. Sửa phần tử")
    console.log("5. Xóa phần tử")
    console.log("6. Thoát")
    choice = Number(prompt("mời bạn chọn chức năng"))
    console.log(`Lựa chọn của bạn: ${choice}`)
    switch (choice) {
        case 1:
            let input = prompt("moi bạn nhập vào 1 chuỗi kí tự bất kì")
            arr = input.split("");
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let add = prompt("moi bạn nhập vào 1 chuỗi kí tự bất kì")
            arr.push(add);
            break;
        case 4:
            let indexEdit = prompt("moi bạn nhập vị trí cần sửa")
            let value = prompt("moi bạn nhập vào giá trị thay thế")
            arr.splice(indexEdit, 1, value);
            break;
        case 5:
            let indexDele = prompt("moi bạn nhập vị trí cần xóa")
            arr.splice(indexDele, 1,);
            break;
        case 6:
            console.log("cảm ơn bạn đã dùng ứng dụng của mình")
            break;
        default:
            console.log("lỗi cú pháp")
            break;
    }
} while (choice !== 6);