let number1 = Number(prompt('mời bạn nhập số thứ nhất'));
let number2 = Number(prompt('mời bạn nhập số thứ hai'));
let math = prompt('nhập các phép tính : (+, -, *, /)');
switch (math) {
    case "+":
        console.log(`kết quả của phép tính trên là: ${number1} ${math} ${number1} = ${number1 + number2}`);
        break;
     case "-":
        console.log(`kết quả của phép tính trên là: ${number1} ${math} ${number1} = ${number1 - number2}`);
        break;
     case "*":
        console.log(`kết quả của phép tính trên là: ${number1} ${math} ${number1} = ${number1 * number2}`);
        break;
     case "/":
        console.log(`kết quả của phép tính trên là: ${number1} ${math} ${number1} = ${number1 / number2}`);
        break;
    default:
        console.log(`lỗi`);
        break;
}