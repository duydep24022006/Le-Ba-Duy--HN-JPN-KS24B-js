let number = Number(prompt("mời bạn nhập vào số năm kinh nghiệm"));
if (number >= 6) {
    document.write("Quản lý");
} else if (number >= 1 && number <= 3) {
    document.write("Nhân viên có kinh nghiệm");
} else if (number >= 4 && number <= 6) {
    document.write(" Chuyên viên");
} else{
     document.write("Quản lý");
}