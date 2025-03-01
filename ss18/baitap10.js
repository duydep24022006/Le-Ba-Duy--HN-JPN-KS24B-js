let number = Number(prompt("mời bạn nhập vào giá trị cần chuyển sang dạng chữ"));

let tram = Math.floor(number / 100);
let chuc = Math.floor((number % 100) / 10);
let donVi = number % 10;
console.log(number);
console.log(tram);
console.log(chuc); 
console.log(donVi);
switch (tram) {
    case 1:
        tram = "một trăm";
        break;
    case 2:
        tram = "hai trăm";
        break;
    case 3:
        tram = "ba trăm";
        break;
    case 4:
        tram = "bốn trăm";
        break;
    case 5:
        tram = "năm trăm";
        break;
    case 6:
        tram = "sáu trăm";
        break;
    case 7:
        tram = "bảy trăm";
        break;
    case 8:
        tram = "tám trăm";
        break;
    case 9:
        tram = "chín trăm";
        break;

    default:
        break;
}
switch (chuc) {
    case 0:
        chuc = "linh";
        break;
    case 1:
        chuc = "mười";
        break;
    case 2:
        chuc = "hai mươi";
        break;
    case 3:
        chuc = "ba mươi";
        break;
    case 4:
        chuc = "bốn mươi";
        break;
    case 5:
        chuc = "năm mươi";
        break;
    case 6:
        chuc = "sáu mươi";
        break;
    case 7:
        chuc = "bảy mươi";
        break;
    case 8:
        chuc = "tám mươi";
        break;
    case 9:
        chuc = "chín mươi";
        break;

    default:
        break;
}
switch (donVi) {
    case 1:
        donVi = "một";
        break;
    case 2:
        donVi = "hai";
        break;
    case 3:
        donVi = "ba";
        break;
    case 4:
        donVi = "bốn";
        break;
    case 5:
        donVi = "năm";
        break;
    case 6:
       donVi = "sáu";
        break;
    case 7:
        donVi = "bảy";
        break;
    case 8:
        donVi = "tám";
        break;
    case 9:
        donVi = "chín";
        break;

    default:
        break;
}
console.log(`${tram} ${chuc} ${donVi}`);
