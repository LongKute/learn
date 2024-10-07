var keo = 1;
var bua = 2;
var bao = 3;
Math.randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const computer = Math.randomInt(1,4)
var human = 2;
console.log(human)
// prompt(human);
// console.log('con so ban vua nhap la:' + human)
console.log(computer)
if (human === computer) {
    console.log("Hoà")
} else if ((computer == 1 && human == 3) || (computer == 2 && human == 1) || (computer == 3 && human == 2) ) {
    console.log("Máy Thắng")
}
 else {
    console.log("Bạn Thắng")

}