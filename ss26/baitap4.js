let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test2 = [];
let test3 = "abc";

function isprime(number) {
    if (!Number.isFinite(number)) {
        
        return -1;
    }
    
    if (number < 2||number%2==0) {
        return 0;
    }
    if (number === 2) {
        return 1;
    }
    let count=3;
    while (count < number) {
        if (number % count === 0) {
            return 0;
        }
        count += 2;
    }
    return 1;
}

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length===0) {
            console.log("Mảng không có phần tử nào");
            return;
        }
        let result = arr.filter((item) => isprime(item))
        result?console.log(result):console.log("mảng không có số nguyên tố")
    } else{
        console.log("dữ liệu không hợp lệ")
    }
}
filter(test1);
filter(test2);
filter(test3);  