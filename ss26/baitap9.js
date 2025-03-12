let test1 = [1,2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15 ];
let test2 = [];
let test3 = "abc";

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length===0) {
            console.log("Mảng không có phần tử nào")
            return;
        }
        let totalEven = 0;
        let totalOdd = 0;
        arr.forEach(element => {
            if (element%2==0) {
                totalEven += element;
            } else {
                totalOdd += element;
            }
        });
        totalEven ? console.log(`totalEven = ${totalEven}`) : console.log("trong mảng không có phần  tử chẵn");
        totalEven ? console.log(`totalOdd = ${totalOdd}`) : console.log("trong mảng không có phần  tử lẻ");
        console.log(result);
    } else{
        console.log("dữ liệu không hợp lệ")
    }
}
filter(test1);
filter(test2);
filter(test3);