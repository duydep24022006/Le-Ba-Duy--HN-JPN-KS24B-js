let test1 = [10, 9, 5, 11, 24, 5];
let test2 = [];
let test3 = "abc";

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length===0) {
            console.log("Mảng không có phần tử nào");
            return;
        }
        let max = arr[0];
        let indexMax = 0;
        arr.forEach((element,index) => {
            if (max < element) {
                max = element;
                indexMax = index;
            }
        })
        console.log(`max: ${max}`);
        console.log(`position: ${indexMax}`);
        
    } else{
        console.log("dữ liệu không hợp lệ")
    }
}
filter(test1);
filter(test2);
filter(test3);