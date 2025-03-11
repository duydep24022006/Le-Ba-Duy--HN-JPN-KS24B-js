

let min = function minAraay(a,b) {
    if (!Number.isInteger(a)||!Number.isInteger(b)) {
        console.log("giá trị không hợp lệ")
        return;
    }
    return a+b;
    
}
console.log(`giá trị nhỏ nhất là ${min(2,7)}`)

