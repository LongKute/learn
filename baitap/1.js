var num= [0,1,2,3,4,5,6,7,8,9,10];
// for(var i = 0; i < 10; i++){
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//      ()
var a = 10
var timer = setInterval(function() {
a--
console.log(a)
if (a == 0){
    clearInterval(timer)
}
}, 1000)