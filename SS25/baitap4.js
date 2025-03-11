const number =6;

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
if (isprime(number)===1) {
    console.log(`số ${number} là số nguyên tố`)
    
} else if (isprime(number) === -1) {
    console.log("giá trị không hợp lệ") 
} else {
    console.log(`số ${number} không phải là số nguyên tố`)
}


