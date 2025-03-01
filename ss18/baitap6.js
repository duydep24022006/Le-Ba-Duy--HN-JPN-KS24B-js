let year = Number(prompt("mời bạn nhập vào năm cần xác nhận"));
if (year%4==0 && year%100!=0|| year%400==0) {
    document.write(`${year} là năm nhuận `);
} else {
    document.write(`${year} không phải là năm nhuận `);   
}