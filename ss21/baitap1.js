let sum = 0;
for (let i = 1; i < 6; i++){
    let number = Number(prompt(`mi bạn nhập số thứ ${i}`));
    if (Number.isInteger) {
        if (number % 2 !== 0) {
            sum += number;
        }
    }    
}
console.log(`tông của 5 số lẻ bạn đã nhập là ${sum}`);
