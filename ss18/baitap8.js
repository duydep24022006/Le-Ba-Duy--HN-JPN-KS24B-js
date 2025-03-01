let a = Number(prompt('mời bạn nhập cạnh thứ nhất'));
let b = Number(prompt('mời bạn nhập cạnh thứ hai'));
let c = Number(prompt('mời bạn nhập cạnh thứ ba'));
if (a===b && a===c && b===c) {
    console.log("tam giác đều");
} else if (a===b || a===c || b===c) {
    console.log("Tam giác cân");
} else if (Math.pow(a,2)+Math.pow(b,2)==Math.pow(c,2)||Math.pow(a,2)+Math.pow(c,2)==Math.pow(b,2)||Math.pow(b,2)+Math.pow(c,2)==Math.pow(a,2)) {
    console.log("Tam giác vuông");
} else {
    console.log("Tam giác thường");
}