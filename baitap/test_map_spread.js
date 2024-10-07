var students = [ 
    { named: 'Đỗ Hùng Dũng', age: 14, height: 16, weight: 20 },
    { named: 'Nguyễn Thị Xuân Nhi', age: 18, height: 16, weight: 20 },
    { named: 'Triệu Thị Thùy Dung', age: 13, height: 16, weight: 20 },
    { named: 'Phạm Bá Nam', age: 17, height: 16, weight: 20 },
    { named: 'Huỳnh Vũ Thiên Ngân', age: 19, height: 16, weight: 20 },
    { named: 'Phạm Thị Thuý Lệ', age: 13, height: 16, weight: 20 },
    { named: 'An Hoàng An', age: 17, height: 16, weight: 20 },
    { named: 'Anna Linh', age: 19, height: 16, weight: 20 }
]
const arr =[1,2,3,4,5,6]
const arr1 = students.map(function(i) {
   return {
    
    ...i, age: i.age += 1
   }
})
console.log(arr1)