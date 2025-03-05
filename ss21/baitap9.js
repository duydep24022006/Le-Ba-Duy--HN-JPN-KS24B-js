let number = Number(prompt("Please enter any integer"));
let d = 0;
if (Number.isInteger(number)) {
    for (let i = 1; i <= Math.abs(number); i++){
        if (number % i == 0 && i != 1 && i != Math.abs(number)) {
            d = 1;
            break;
        }
    }
} else {
    console.log('Error')
}
console.log(d ? number + ' is not a prime number' : number + ' is a prime number');