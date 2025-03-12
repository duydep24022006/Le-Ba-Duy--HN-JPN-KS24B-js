let test1 = ['duydeptrai','duy','quádi'];
let test2 = [];
let test3 = "abc";

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length===0) {
            console.log("Mảng không có phần tử nào");
            return;
        }
        let result = arr.filter((item) => item.length > 5)
        console.log(result);
    } else{
        console.log("dữ liệu không hợp lệ")
    }
}
filter(test1);
filter(test2);
filter(test3);