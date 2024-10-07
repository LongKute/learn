

var b ='';
var a =0;
var c ;
// const total = document.getElementById('tilte')

var elements = {};
var elementIds = [
    'title',
    'add',
    'subtraction',
    'division',
    'mul',
    'reset',
    'equal',
    'operation',
    'number',
    'text',
    'length'
]
elementIds.forEach(function (item) {
  var element = document.getElementById(item);
  elements[item] = element;
});

// elements.btn.onclick = function () {
//   alert("Hello, world!");
// };





// const unadd = getElement('unadd');
// const add = document.getElementById('add')



// const text = document.getElementById('text');
// const submit = document.getElementById('submit')
// submit.onclick = function(){
    
//     a = text.value;
//     total.innerHTML = a;
// }


// const total = document.getElementById('title')
// const add = document.getElementById('add');
// const unadd = document.getElementById('unadd');
// const division = document.getElementById('division');
// const mul = document.getElementById('mul');
// const reset = document.getElementById('reset'); 
// const bang = document.getElementById('equal'); 
// const number = document.getElementById('operation')



elements.mul.onclick = function(){

    b = '*'
    
}
elements.division.onclick = function(){
    b ='/'
    
}
elements.add.onclick = function(){
    b ='+'
    
}
elements.subtraction.onclick = function(){
    b ='-'
    
}

elements.reset.onclick = function(){
    a = 0;
    elements.title.innerHTML = a;
}

elements.equal.onclick = function(){
       if(b == "+") {
        a += parseInt(elements.operation.value) ; 
        elements.title.innerHTML = a;
       }
       if(b == "-") {
        a -= parseInt(elements.operation.value) ; 
        elements.title.innerHTML = a;
       }
       if(b == "*") {
        a *= parseInt(elements.operation.value) ; 
        elements.title.innerHTML = a;
       }
       if(b == "/") {
        a /= parseInt(elements.operation.value) ; 
        elements.title.innerHTML = a;
       }
       
       
        
    }

    
elements.text.oninput = function(){
    c = elements.text.value;
    elements.length.innerHTML = c.length;
}




























// const double = document.getElementById('double')
// const an = document.getElementById('hide')
// const hien = document.getElementById('show')
// const red = document.getElementById('red')
// const black = document.getElementById('black')
    // nut nhan + len 1, - giam xuong 1, nut x2 thi nhan 2
//    add.onclick = function(){
//         b = '+'
//         a += 1;
//         console.log(a);
//         total.innerHTML = a;
//     }
//     unadd.onclick = function(){
//         b = '-'
//         a -= 1
//         console.log(a);
//         total.innerHTML = a;
//     }
//     double.onclick = function(){
//         a *=2
//         console.log(a);
//         total.innerHTML = a;
//     }
// // ẩn hiện tiêu đề khi nhấn nút hide anh show
//     an.onclick = function(){
//         total.classList.add('an')
//         total.classList.remove('hien')
//         total.innerHTML = a;
    
//     }
//     hien.onclick = function(){
//         total.classList.remove('an')
//         total.classList.add('hien')
//         total.innerHTML = a;
//     } 
   

    

//tạo nút đỏ đen, nút đỏ thì chữ đỏ, nut đen thì chữ đen

// red.onclick = function(){
//     total.classList.add("do");
//     total.classList.remove("den");
//     total.innerHTML = a;
// }

// black.onclick = function(){
//     total.classList.add("den");
//     total.classList.remove("do");
//     total.innerHTML = a;
// }



// baitap: tao 1 mang cac hoc sinh ul,li. In ra danh sách trên HTML mỗi học sinh là 1 li (deadline:3h)
/* const ul = document.getElementById("list")
const list_student = [
    'Đỗ Hùng Dũng',
    'Đỗ Hùng Dũng',
    'Đỗ Hùng Dũng',
    'Đỗ Anh Dũng',
    'Đỗ Bien Dũng',
    'Đỗ Hùng Dũng',
    'Đỗ Hùng Dũng',
    'Đỗ Hùng Dũng',
    
]

const li = list_student.map((i)=> {


 return `<li class="do">${i}</li>`})
console.log(li);
ul.innerHTML = li.join('')   */


// bang.onclick = function(){
//     if (b = '+') {
//         a += number.value ; 
//         total.innerHTML = a;
//         console.log(a);
    
//     }
     
    
    
// }
