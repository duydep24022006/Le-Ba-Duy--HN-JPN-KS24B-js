let le = 0;
let chan = 0;

for (let i = 1; i < 6; i++){
    let number = Number(prompt(`mi bạn nhập số thứ ${i}`));
    if (Number.isInteger) {
        if (number % 2 !== 0) {
            le ++;
        }else if(number % 2 === 0){
            chan ++;
        }
    }
}
console.log(`tông của 5 số lẻ bạn đã nhập là ${le}`);
console.log(`tông của 5 số chẵn bạn đã nhập là ${chan}`);