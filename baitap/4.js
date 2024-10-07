// Danh sách học sinh:
// - Bài 1: Cộng tất cả số tuổi của các học sinh lên 1. forEach()
// - Bài 2: Lọc danh sách học sinh và tìm ra danh sách học sinh có: Tên bắt đầu bằng  chữ A. sử dụng Filte
// - Bài 3: Tìm tất cả học sinh có số tuổi bằng nhau và đưa vào mảng mới. in ra luôn



var students = [ 
    {named:'Đỗ Hùng Dũng', age: 14},
    {named:'Nguyễn Thị Xuân Nhi', age: 18},
    {named:'Triệu Thị Thùy Dung', age: 13},
    {named:'Phạm Bá Nam', age: 17},
    {named:'Huỳnh Vũ Thiên Ngân', age: 19},
    {named:'Phạm Thị Thuý Lệ', age: 13},
    {named:'An Hoàng An', age: 17},
    {named:'Anna Linh', age: 19}
]
// - Bài 1: Cộng tất cAstudentuổi của các học sinh lên 1.

// // dung for
// console.log(students[0].age)
// console.log("Đây là cộng tất cả số tuổi của các học sinh lên 1 tuổi:")
// for ( var i = 0; i < students.length; i++) {
//    students[i].age += 1;
//    console.log(students[i].age) 
    
// }


// Dung map


// console.log("Day la cong moi hoc sinh trong mang len 1 tuoi")


// - Bài 2: Lọc danh sách học sinh và tìm ra danh sách học sinh có: Tên bắt đầu bằng  chữ A. sử dụng Filte

console.log("Lọc danh sách học sinh và tìm ra danh sách học sinh có: Tên bắt đầu bằng  chữ A. ")
// var A = student.filter()
// var studentA = student.filter

// function loc(arr, query){
//     return arr.filter((nameA) => nameA.named.));
// }

// da xong bai2

// var b = "Phạm Minh Tâm"
// const listStartA = students.filter((student)=> {
// const nameS = student.named.split(" ")
//   return  nameS[nameS.length-1].split('')[0] == "A"
// })
// console.log(listStartA)


// console.log(loc(student, "A")); 

// var studentA = student.filter(nameA => nameA.named !=="A" )


// console.log(studentA);


console.log(" Tìm tất cả học sinh có số tuổi bằng nhau và đưa vào mảng mới. in ra luôn")

// var same = students.filter( students);


console.log(copy_Age);
// var duplicatedValues = […new Set(numOne)].filter(item => numTwo.includes(item));
// console.log(duplicatedValues); // returns [2, 4, 6]


// const ageGroups = {};

// // Nhóm học sinh theo tuổi
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     if (!ageGroups[student.age]) {
//         ageGroups[student.age] = [];
//     }
//     ageGroups[student.age].push(student.name);
// }

// // Tạo mảng mới chứa các học sinh có số tuổi bằng nhau
// const result = [];

// // Lọc nhóm có nhiều hơn 1 học sinh
// for (const age in ageGroups) {
//     if (ageGroups[age].length > 1) { // Chỉ lấy những tuổi có nhiều hơn 1 học sinh
//         result.push({ age: Number(age), names: ageGroups[age] });
//     }
// }