
//  const fs = require('fs');

//  fs.readFile('./ssss.txt', function (err, data) {
//      if (err) throw err;
//      console.log(data.toString());
//  });
 
//  console.log(1);

var list = ['Đỗ Hùng Dũng', 'Nguyễn Thị Xuân Nhi', 'Triệu Thị Thùy Dungaaaaâ', 'Phạm Bá Nam', 'Huỳnh Vũ Thiên Ngânaấdsdsadsadsadsadsâdsâ', 'Phạm Thị Thuý Lệ']



// for (var i=0; i < list.length ; i++ ) {
//     if (max < list[i].length){
//         max = list[i].length
        
//     }
    
// }
var max=[' '];
for (var a = 0; a < list.length  ; a++ ) {
    if(max.length < list[a].length ){
        max = list[a];
    }
   
}

console.log(max.length)
console.log(max);
// for (var i = 0; i < name.length; i++) {
//     console.log(name);
//   }

  // sử dụng push để thêm phần tử hoặc splice