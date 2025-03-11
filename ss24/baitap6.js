let str = "";
let choice;
do {
    choice = Number(prompt(`==================== MENU ====================
            1. Nhập chuỗi.
            2. Hiển thị chuỗi.
            3. Tính độ dài của chuỗi.
            4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi.
            5. Kiểm tra chuỗi có phải là chuỗi đối xứng không.
            6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ.
            7. Thoát chương trình.
            Lựa chọn của bạn:
=============================================`))
    switch (choice) {
        case 1:
            str = prompt("mời bạn nhập vào 1 chuỗi ký tự ");
            if (str===null||str.trim()==="") {
                alert("chuỗi nhập không thành công")
            } else {
                alert("chuỗi lưu thành công")
            }
            break;
        case 2:
            if (str==="") {
                alert("chuỗi rỗng!")
            } else {
                alert(`chuỗi của bạn đã nhập: ${str}`)
            }
            break;
        case 3:
            if (str==="") {
                alert("chuỗi rỗng!")
            } else {
                alert(`chuỗi của bạn đã nhập có độ dài là : ${str.length}`)
            }
            break;
        case 4:
            let arr = [];
            let strArr = str;
            arr = strArr.split("");
            if (str==="") {
                alert("chuỗi rỗng!")
            } else {
                let inputChar = prompt("mời bạn nhập số cần tìm");
                let duplicateChars = arr.filter(char => char === inputChar);
                alert(`số lần xuất hiện của kí tự ${inputChar} là: ${duplicateChars.length}`)
            }
            break;
        case 5:
            if (str==="") {
                alert("chuỗi rỗng!")
            } else {
                let cleanString = str.replace(/\s+/g, '').toLowerCase();
                let daoNguoc = cleanString.split("").reverse().join("");
                if (cleanString === daoNguoc) {
                    alert("Chuỗi này là chuỗi đối xứng!");
                } else {
                    alert("Chuỗi này không phải là chuỗi đối xứng!");
                }
            }
            break;
        case 6:
            if (str === "") {
                // Kiểm tra nếu chuỗi rỗng, thông báo cho người dùng
                alert("⚠️ Chưa có chuỗi nào để chuẩn hóa!");
            } else {
                // Chuyển toàn bộ chuỗi về chữ thường để tránh trường hợp chữ cái giữa từ bị viết hoa
                let chuanHoa = str.toLowerCase()
                    .replace(/\b\w/g, c => c.toUpperCase()); // Viết hoa chữ cái đầu của mỗi từ

                // Hiển thị kết quả sau khi chuẩn hóa
                alert("🔠 Chuỗi sau khi chuẩn hóa: " + chuanHoa);
            }

            break;
        case 7:
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        
        default:
            break;
    }
} while (choice!==7);