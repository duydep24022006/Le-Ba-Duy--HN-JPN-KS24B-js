let test1 = [1,2,3,12,34,1,34,7,64,2];
let test2 = [];
let test3 = "abc";

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length===0) {
            console.log("Mảng không có phần tử nào");
            return;
        }
        let result = arr.filter((item) => item >= 10)
        console.log(result);
    } else{
        console.log("dữ liệu không hợp lệ")
    }
}
filter(test1);
filter(test2);
filter(test3);