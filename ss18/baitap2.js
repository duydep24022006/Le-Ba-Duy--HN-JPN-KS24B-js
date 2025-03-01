let mathScore = Number(prompt("mời bạn nhập vào điểm môn toán"));
let literatureScore = Number(prompt("mời bạn nhập vào điểm môn văn"));
let englishScore = Number(prompt("mời bạn nhập vào điểm môn anh"));
let score = (mathScore + literatureScore + englishScore) / 3;
if (score >= 8) {
    document.write("giỏi");
} else if (score >= 6.5 && score <= 7.9) {
    document.write("khá");
} else if (score >= 5.5 && score <= 6.4) {
    document.write("trung bình");
} else{
     document.write("yếu");
}