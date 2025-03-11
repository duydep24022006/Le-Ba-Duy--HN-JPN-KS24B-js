let str = prompt("mời bạn nhập chuỗi")
uperrCasr(str);
function uperrCasr(str) {
    let uperr = str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    console.log(uperr);
}
