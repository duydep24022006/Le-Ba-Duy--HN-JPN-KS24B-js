function main() {
    let choice;
    let pi = Math.pi;

    let result;
    do {
        choice=menu(choice);
        switch (choice) {
            case 1:
               
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            case 4:
                
                break;
            case 5:
                alert("bạn đã thoát chương trình")
                break;
            
            default:
                alert("lỗi cú pháp")
                break;
        }
    } while (choice!==5);
}
function menu(choice) {
    choice=+prompt(`========MENU=======
            1.Tính diện tích hình tròn.
            2.Tính chu vi hình tròn.
            3.Tính diện tích hình chữ nhật.
            4.Tính chu vi hình chữ nhật.
            5.Thoát.
====================
        Mời bạn nhập lựa chọn:`)
    return choice;
}

function inputCircle() {
    let r = +prompt("mời bạn nhập bán kính hình tròn")
    return  r;
}
function inputRectangle() {
    let D = +prompt("mời bạn nhạp chiều dài hình chữ nhât")
    let R=+prompt("Mời bạn nhập ")
}
main();