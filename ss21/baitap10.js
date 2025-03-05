let number = Number(prompt("Mời bạn nhập số bất kì"));
let count = 0;
let i = 2;

if (Number.isInteger(number) && number > 0) {
    while (count < number) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
            if (count <= number) {
                console.log(`${i}`);
            }
        }
        i++;
    }
} else {
    console.log('Lỗi: Vui lòng nhập một số nguyên dương.');
    document.write('Lỗi: Vui lòng nhập một số nguyên dương.');
}