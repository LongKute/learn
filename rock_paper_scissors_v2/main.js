var keo_Bua_Bao = [
    'Keo',
    'Bua',
    'Bao',
];
Math.randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const computer = Math.randomInt(0,3)
let x = keo_Bua_Bao[computer]   
console.log( x);
var human = keo_Bua_Bao[1];
console.log( human);
if (human === x) {
    console.log('Hoa');
} else if ((x == 'Keo' && human == 'Bao') || (x == 'Bua' && human == 'Keo') || (x == 'Bao' && human == 'Bua') ){
    console.log('Máy thắng');
} else{
    console.log('Người thắng');
}

 