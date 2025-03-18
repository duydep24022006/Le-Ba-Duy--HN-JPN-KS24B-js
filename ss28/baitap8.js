const users = {};
let id,name, position, salary;
function main() {
    let choice;
    do {
        choice=showMenu(choice);
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
                
                break;
            
            default:
                break;
        }
    } while (choice!==5);
}
function showMenu(choice) {
     choice = +prompt(`==========MENU=========
    1.Thêm nhân viên mới.
    2.Xóa nhân viên theo id.
    3.Cập nhật mức lương của nhân viên theo id.
    4.Tìm kiếm nhân viên theo tên.
    5.Thoát.
========================
        Mời bạn nhập lựa chọn:`);
     return choice;
}
function addUser() {
    let nameUser=prompt("")
}
main();
