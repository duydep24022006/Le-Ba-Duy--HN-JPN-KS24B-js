let str = prompt("mời bạn nhập vào tài khoản");
if (str === "ADMIN") {
    let password = prompt("mời bạn nhập vào mật khẩu");
    if (password === "TheMaster") {
        console.log("Welcome");
    } else if (password === "null"){
        console.log("Cancelled");
    } else {
        console.log("Wrong password");
    }
} else if (str === "null"){
    console.log("Cancelled");
} else {
    console.log("I Don’t know you");
}