//functin dom call back
//return tra ve ham
// cho mot mang rong, hay them 10 phan tu vao mang nay voi con so random la so nguyen từ 1 đến 10 (float)
var arr1 = [];
for (var i = 0; i < 10; i++){
    arr1.push(Math.floor(Math.random(10)*10))
    
}
console.log(arr1);
var sum = 0;
for (let a = 0; a < arr1.length; a++) {
    sum += arr1[a];
    
    
}
console.log(sum);